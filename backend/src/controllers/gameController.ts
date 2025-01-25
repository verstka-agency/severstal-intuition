import { Request, Response } from "express"
import { sequelize } from "../config/db"
import { Answer } from "../models/Game/Answer"
import { Game } from "../models/Game/Game"
import { Question } from "../models/Game/Question"
import { User } from "../models/User"
import { Op } from "sequelize"

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
                currentQuestion: nextQuestion,
                isMemoryPassed: nextRound !== game.dataValues.currentRound,
                isPostcardsPassed: nextRound !== game.dataValues.currentRound
            })

            res.status(200).json(answers)

        } catch (error) {
            console.error(error)
        }
    },
    additionalGames: async (req: Request, res: Response) => {
        const { userId } = res.locals
        const { type } = req.body

        if (!type) {
            res.status(400).json({
                "message": "Params error. Params should be \"memory\" or \"postcards\""
            })
        }

        try {
            const game = await Game.findOne({
                where: {
                    userId: userId
                }
            })

            if (!game) {
                res.status(400).json({
                    "message": "Game error"
                })
                return
            }

            let newScore = game.dataValues.score + 200

            if (type === "memory" && !game.dataValues.isMemoryPassed) {
                await game.update({
                    score: newScore,
                    isMemoryPassed: true
                })
                res.status(200).json({
                    "status": "ok"
                })
                return
            }
            if (type === "memory" && !game.dataValues.isPostcardsPassed) {
                await game.update({
                    score: newScore,
                    isPostcardsPassed: true
                })
                res.status(200).json({
                    "status": "ok"
                })
                return
            }

        } catch (error) {
            console.error(error)
        }
    },
    endRound: async (req: Request, res: Response) => {
        const { userId } = res.locals

        try {
            const game = await Game.findOne({
                where: {
                    userId: userId
                }
            })

            if (!game) {
                res.status(400).json({
                    "message": "Game error"
                })
                return
            }

            const round = game?.dataValues.currentRound
            if (round >= 5) {
                res.status(400).json({
                    "message": "Вы и так на последнем раунде"
                })
                return
            }
            game.update({
                currentRound: round + 1,
                currentQuestion: 1,
                isMemoryPassed: false,
                isPostcardsPassed: false
            })
            res.status(200).json({
                "status": "ok"
            })

        } catch (error) {
            console.error(error)
        }
    },
    dashboard: async (req: Request, res: Response) => {
        try {
            // Получаем 15 самых высоких уникальных значений score
            // Шаг 1: Получаем все записи с отсортированными значениями score
            const uniqueScores = await Game.findAll({
                attributes: [[sequelize.fn('DISTINCT', sequelize.col('score')), 'score']], // Получаем только уникальные значения score
                order: [['score', 'DESC']], // Сортируем по убыванию
                limit: 15, // Ограничиваем до 15 значений
                raw: true, // Получаем данные как обычные объекты
            })

            // @ts-ignore
            const contestantsScores = uniqueScores.map((item) => item.score)
            const contestantsGames = await Game.findAll({
                where: {
                    score: contestantsScores
                }
            })

            const users = await User.findAll({
                where: {
                    id: contestantsGames.map((contestantsGame) => {
                        return contestantsGame.dataValues.userId
                    })
                }
            })

            res.json(users.map((user) => {
                    const score = contestantsGames.filter((contestantsGame) => {
                        return contestantsGame.dataValues.userId === user.dataValues.id
                    })[0].dataValues.score

                    return {
                        firstName: user.dataValues.firstName,
                        lastName: user.dataValues.lastName,
                        score: score,
                        position: uniqueScores.findIndex((uniqueScore) => {
                            // @ts-ignore
                            if (uniqueScore.score === score) {
                                return true
                            }
                        }) + 1
                    }
                }).sort((a, b) => {
                    return a.position - b.position
                })
            )

        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Ошибка при обработке запроса' })
        }
    },
    currentPosition: async (req: Request, res: Response) => {
        const { userId } = res.locals

        try {
            const currentGame = await Game.findOne({
                where: {
                    userId: userId
                }
            })

            const allScores = await Game.findAll({
                attributes: [[sequelize.fn('DISTINCT', sequelize.col('score')), 'score']], // Получаем только уникальные значения score
                order: [['score', 'DESC']], // Сортируем по убыванию
                raw: true, // Получаем данные как обычные объекты
            })

            const currentIndex = allScores.findIndex((uniqueScore) => {
                // @ts-ignore
                if (uniqueScore.score === currentGame.dataValues.score) {
                    return true
                }
            }) + 1

            res.json({
                position: currentIndex
            })
        } catch (error) {
            console.error(error)
        }
    },
    roundPreview: async (req: Request, res: Response) => {
        const { userId } = res.locals
        console.log("userId", userId)

        try {
            const game = await Game.findOne({
                where: {
                    userId: userId
                }
            })

            const questions = await Question.findAll({
                where: {
                    id: game?.dataValues.questions
                }
            })

            const questionsPerRound = 10 // Количество вопросов в раунде
            const currentRound = game?.dataValues.currentRound // Текущий раунд

            // Вычисляем индексы начала и конца для текущего раунда
            const startIndex = (currentRound - 1) * questionsPerRound
            const endIndex = startIndex + questionsPerRound

            // Извлекаем вопросы для текущего раунда
            const currentRoundQuestions = questions?.slice(startIndex, endIndex)

            // console.log(`Вопросы для раунда ${currentRound}:`, currentRoundQuestions)
            // console.log('questions', questions)

            res.status(200).json(currentRoundQuestions)
        } catch (error) {
            console.error(error)
        }
    },
}