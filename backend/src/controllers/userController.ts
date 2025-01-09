// controllers/userController.js
import { User } from '../models/User'
import { Request, Response } from 'express'
import Joi from "joi"
import { checkIfYourExists } from "../utils/user"

const updateSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phone: Joi.string().required(),
    city: Joi.string().required(),
    // isStaff: Joi.boolean().required(),
    // isPrivacyPolicyConfirmed: Joi.boolean().required(),
    // subdivision: Joi.string()
    //     .when('isStaff', {
    //         is: true, then: Joi.required(), otherwise: Joi.optional()
    //     }),
    // jobTitle: Joi.string()
    //     .when('isStaff', {
    //         is: true, then: Joi.required(), otherwise: Joi.optional()
    //     }),
})

export const userController = {
    read: async (req: Request, res: Response) => {
        const { userId } = res.locals

        try {
            const users = await User.findOne({
                where: {
                    id: userId
                }
            })
            res.status(200).json(users)
        } catch
            (error) {
            res.status(500).json({ error: 'Failed to fetch users' })
        }
    },
    // TODO потом обязательно удалить этот эндпоинт
    create: async (req: Request, res: Response) => {
        // Валидация тела запроса с помощью Joi
        const { error } = updateSchema.validate(req.body)

        if (error) {
            // Если есть ошибка, отправляем статус 400 с сообщением ошибки
            res.status(400).json({ error: error.details[0].message })
            return
        }

        const isUserExists = await checkIfYourExists({
            email: req.body.email,
        })

        if (isUserExists) {
            res.status(400).json({ error: "Пользователь с таким email уже зарегистрирован" })
        }

        // TODO как отображаем в дизайне? Модалка?

        try {
            const user = await User.create({
                email: req.body.email,
                password: req.body.email,
                lives: 5,
                money: 0,
                currentRound: 0
            })
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch users' })
        }
    },
    update: async (req: Request, res: Response) => {
        const body = req.body
        const { userId } = res.locals

        // Доделать валидацию, потому что она ебет мозги, все поля по идее должны быть опциональными

        // const { error } = updateSchema.validate(req.body, { abortEarly: false })
        //
        // if (error) {
        //     // Если есть ошибка, отправляем статус 400 с сообщением ошибки
        //     const errorObject: Record<string, string> = {}
        //     error.details.forEach((detail) => {
        //         errorObject[detail.path[0]] = detail.message
        //     })
        //     res.status(400).json({ error: errorObject })
        //     return
        // }

        const {
            avatar,
            firstName,
            lastName,
            phone,
            city,
            isStaff,
            isPrivacyPolicyConfirmed,
            isSeverstalEmployee,
            isGameRulesConfirmed,
            subdivision = "",
            jobTitle = ""
        } = body

        try {
            const [updatedCount, updatedRows] = await User.update(
                {
                    avatar,
                    firstName,
                    lastName,
                    phone,
                    city,
                    isStaff,
                    isPrivacyPolicyConfirmed,
                    isSeverstalEmployee,
                    isGameRulesConfirmed,
                    subdivision,
                    jobTitle
                },
                {
                    where: { id: userId },
                    returning: true
                }
            )

            if (updatedCount === 0) {
                res.status(200).json('No records were updated.')
                return
            } else {
                res.status(200).json(updatedRows)
                return
            }
        } catch (error) {
            console.error('Error updating record:', error)
        }
    }
}
