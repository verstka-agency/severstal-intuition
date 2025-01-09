import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import { Resend } from "resend"
import { User } from "../models/User"
import { config } from 'dotenv'

config()

const resend = new Resend("re_Gp2wMgvJ_B8jcadQc5SCcUq7RgEU7mWBw")

export const authController = {
    sendMagicLink: async (req: Request, res: Response) => {
        const { email } = req.body

        if (!email) {
            res.status(400).json({ "error": "Отсутствует email" })
            return
        }

        // Если юзер запрашивает отправку письма в первый раз, то создаем юзера, если нет, то отправляем существующего
        const [data, isCreated] = await User.findOrCreate({
            where: { email: email },
            defaults: {
                currentRound: 0,
                lives: 5,
                money: 0
            }
        })

        const token = jwt.sign({ id: data.dataValues.id }, process.env.JWT_SECRET ?? "", { expiresIn: "30d" })
        const link: string = `http://${process.env.BASE_URL}/authorization/verification?token=${token}`

        try {
            const { data, error } = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: [email],
                subject: "hello world",
                html: `<p>${link}</p>`,
            })
            console.log('data', data)
            console.log('error', error)
            // await sendMagicLink(email, link)
            res.status(200).json({ message: 'Письмо отправлено! Проверьте спам' })
        } catch (error) {
            res.status(500).json({ error: 'Ошибка при отправке письма, обратитесь в поддержку' })
        }
    },
    // verifyToken: (req: Request, res: Response) => {
    //     const { token } = req.query
    //
    //     if (!token) {
    //         res.status(400).json({ "error": "Отсутствует токен" })
    //         return
    //     }
    //
    //     try {
    //         const payload = verifyToken(token as string)
    //         res.status(200).json({ message: 'Logged in successfully', user: payload })
    //     } catch (error) {
    //         res.status(400).json({ error: 'Invalid or expired token' })
    //     }
    // },
    generateToken: (req: Request, res: Response) => {
        // TODO удалить эндпоинт
        const body = req.body
        if (!body.id) {
            res.status(400).json({ "error": "Отсутствует id пользователя" })
            return
        }
        if (!process.env.JWT_SECRET) {
            res.status(400).json({ "error": "Ошибка во время генерации токена" })
            return
        }

        try {
            const accessToken = jwt.sign({ id: body.id }, process.env.JWT_SECRET ?? "", { expiresIn: "30d" })
            res.status(200).json({ accessToken: accessToken })
        } catch (error) {
            res.status(400).json("Ошибка во время генерации токена")
        }
    }
}