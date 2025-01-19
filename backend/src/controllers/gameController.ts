import { Request, Response } from "express"
import { Answer } from "../models/Game/Answer"
import { Game } from "../models/Game/Game"
import { Question } from "../models/Game/Question"
import { User } from "../models/User"

export const gameController = {
    getCurrentQuestion: async (req: Request, res: Response) => {
        const { userId } = res.locals

        try {
            const game = await Game.findOne({
                where: {
                    userId: userId
                },
            })

            if (game === null) {
                res.status(400).json({
                    "Message": "Game error"
                })
                return
            }

            const questions = game.dataValues.questions
            const index = (game.dataValues.currentRound - 1) * 10 + (game.dataValues.currentQuestion - 1)

            const answers = await Answer.findAll({
                where: {
                    question: questions[index]
                }
            })

            if (!answers) {
                res.status(400).json({
                    "message": "Answer error"
                })
                return
            }

            const currentQuestion = await Question.findOne({
                where: {
                    id: questions[index]
                }
            })

            if (!currentQuestion) {
                res.status(400).json({
                    "message": "Question error"
                })
                return
            }

            res.status(200).json({
                ...currentQuestion.dataValues,
                answers: answers.map((answer) => {
                    return {
                        id: answer.dataValues.id,
                        text: answer.dataValues.text
                    }
                })
            })

        } catch (error) {
            console.error(error)
        }
    },
    sendAnswer: async (req: Request, res: Response) => {
        const { userId } = res.locals
        const { answerId } = req.body

        try {
            if (!answerId) {
                res.status(400).json({
                    "error": "Отсутствует ответ"
                })
                return
            }

            // Нужно проверить, что id вопроса соответствует currentQuestion game у user
            const game = await Game.findOne({
                where: {
                    userId: userId
                }
            })

            if (!game) {
                res.send(400).json({
                    "message": "Game error"
                })
                return
            }

            const index = (game.dataValues.currentRound - 1) * 10 + (game.dataValues.currentQuestion - 1)
            const questions = game.dataValues.questions

            const answers = await Answer.findAll({
                where: {
                    question: questions[index]
                }
            })

            if (!answers) {
                res.status(400).json({
                    message: "Answer error"
                })
            }

            const isValid = answers.some((answer) => answer.dataValues.id === answerId)

            if (!isValid) {
                res.status(400).json({
                    "message": `${answerId} does not match to ${JSON.stringify(answers.map((answer) => answer.dataValues.id))}`
                })
                return
            }

            const isCorrect = answers.find((answer) => {
                return answerId === answer.dataValues.id && answer.dataValues.isCorrect
            })

            console.log('isCorrect', isCorrect)

            let newScore = game.dataValues.score
            if (isCorrect) {
                newScore += 100
            } else {
                newScore -= 50
                if (newScore < 0) {
                    newScore = 0
                }
            }

            /**
             * Всего 5 раундов по 10 вопросов
             * Если 10 вопросов в раунде отвечено, то пока раунд меньше 6, то прибаваляем 1 к вопросу,
             * если вопрос меньше 11
             */

            let nextRound = game.dataValues.currentRound
            let nextQuestion = game.dataValues.currentQuestion
            if (nextQuestion < 10) {
                nextQuestion += 1
            } else {
                if (nextRound < 5) {
                    nextRound += 1
                    nextQuestion = 1
                }
            }
            await game.update({
                score: newScore,
                currentRound: nextRound,
                currentQuestion: nextQuestion
            })

            res.status(200).json(answers)

        } catch (error) {
            console.error(error)
        }
    }
}