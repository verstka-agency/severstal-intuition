import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import { Resend } from "resend"
import { User } from "../models/User"
import { config } from 'dotenv'
import { sequelize } from "../config/db"
import { Question } from "../models/Game/Question"
import { Game } from "../models/Game/Game"
import * as path from "path"
import * as fs from "fs"

config()

const resend = new Resend("re_Gp2wMgvJ_B8jcadQc5SCcUq7RgEU7mWBw")

export const authController = {
    sendMagicLink: async (req: Request, res: Response) => {
        const { email } = req.body

        if (!email) {
            res.status(400).json({ error: "Отсутствует email" })
            return
        }

        const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
        if (!emailRegex.test(email)) {
            res.status(400).json({
                error: "Укажите email в правильном формате"
            })
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
                res.status(400).json({ error: "Ошибка при создании пользователя" })
                return
            }
        }

        // Генерация токена
        const token = jwt.sign({ id: data.dataValues.id }, process.env.JWT_SECRET ?? "", { expiresIn: "30d" })
        const link: string = `${process.env.BASE_URL}/authorization/verification?token=${token}`

        // Загружаем шаблон
        let emailTemplate = fs.readFileSync(path.join(__dirname, '../views', 'email_template.html'), 'utf8')

        // Подставляем переменную link в HTML
        emailTemplate = emailTemplate.replace('href="#"', `href="${link}"`)

        // Отправка письма
        try {
            const { data: letter, error } = await resend.emails.send({
                from: "Стальная Интуиция <onboarding@resend.dev>",
                to: [email],
                subject: "Поздравляем с регистрацией!",
                html: emailTemplate
            })
            if (error) {
                res.status(400).json({ message: "Ошибка при отправке письма" })
            }
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