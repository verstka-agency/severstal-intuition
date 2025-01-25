import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import { Resend } from "resend"
import { User } from "../models/User"
import { config } from 'dotenv'
// import { Question } from "src/models/Game/Question"
import { sequelize } from "../config/db"
import { Question } from "../models/Game/Question"
import { Game } from "../models/Game/Game"

config()

const resend = new Resend("re_Gp2wMgvJ_B8jcadQc5SCcUq7RgEU7mWBw")

export const authController = {
    sendMagicLink: async (req: Request, res: Response) => {
        const { email } = req.body

        if (!email) {
            res.status(400).json({ error: "Отсутствует email" })
            return
        }

        // Найти или создать пользователя
        const [data, isCreated] = await User.findOrCreate({
            where: { email: email },
        })

        // Если пользователь был создан впервые, дополнить его поля
        if (isCreated) {
            try {
                // // Получаем вопросы и перемешиваем их
                const allQuestions = await Question.findAll()
                const sortedQuestions = allQuestions.sort(() => Math.random() - 0.5).map((question) => question.dataValues.id) // Сохраняем массив вопросов
                const currentQuestion = sortedQuestions[0]

                // // Формируем данные для записи в Game
                const gamesData = {
                    currentRound: 1,
                    currentQuestion: 1,
                    score: 500, // Стартовый счет,
                    userId: data.dataValues.id, // Привязываем к созданному пользователю
                    avatar: currentQuestion.avatar,
                    questions: sortedQuestions
                }

                // // Создаем записи в таблице Game
                await Game.create(gamesData)

            } catch (error) {
                console.error("Ошибка при дополнении полей пользователя:", error)
                res.status(500).json({ error: "Ошибка при создании пользователя" })
                return
            }
        }

        // Генерация токена
        const token = jwt.sign({ id: data.dataValues.id }, process.env.JWT_SECRET ?? "", { expiresIn: "30d" })
        const link: string = `http://${process.env.BASE_URL}/authorization/verification?token=${token}`

        // Отправка письма
        try {
            const { data: letter, error } = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: [email],
                subject: "Поздравляем с регистрацией!",
                html: `<p>${link}</p>`,
            })
            res.status(200).json({ message: "Письмо отправлено! Проверьте спам" })
        } catch (error) {
            console.error("Ошибка при отправке письма:", error)
            res.status(500).json({ error: "Ошибка при отправке письма, обратитесь в поддержку" })
        }
    },
    vkAuth: async (req: Request, res: Response) => {

        const { email } = req.body

        if (!email) {
            res.status(400).json({ "error": "Отсутствует VK user_id" })
            return
        }

        const [data, isCreated] = await User.findOrCreate({
            where: { email: email },
        })

        const token = jwt.sign({ id: data.dataValues.id }, process.env.JWT_SECRET ?? "", { expiresIn: "30d" })
        const link: string = `http://${process.env.DEBUG_URL}/authorization/verification?token=${token}`
        
        res.status(200).json(link)

    }
}