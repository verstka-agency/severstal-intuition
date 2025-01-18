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
        })

        const token = jwt.sign({ id: data.dataValues.id }, process.env.JWT_SECRET ?? "", { expiresIn: "30d" })
        const link: string = `http://${process.env.BASE_URL}/authorization/verification?token=${token}`

        try {
            const { data, error } = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: [email],
                subject: "Поздравляем с регистрацией!",
                html: `<p>${link}</p>`,
            })
            res.status(200).json({ message: 'Письмо отправлено! Проверьте спам' })
        } catch (error) {
            res.status(500).json({ error: 'Ошибка при отправке письма, обратитесь в поддержку' })
        }
    },
}