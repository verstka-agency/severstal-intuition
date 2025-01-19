// controllers/userController.js
import { User } from '../models/User'
import { Request, Response } from 'express'
import { Op } from "sequelize"
import { sequelize } from "../config/db"
import { Game } from "../models/Game/Game"
// import { users } from "src/utils/user"

export const userController = {
    getProfile: async (req: Request, res: Response) => {
        const { userId } = res.locals

        try {
            const data: Record<string, any> = {}

            const user = await User.findOne({
                where: {
                    id: userId
                }
            })

            if (!user) {
                res.status(400).json({
                    messgae: "Возникла ошибка"
                })
                return
            }

            const game = await Game.findOne({
                where: {
                    userId: userId
                }
            })


            if (game) {
                delete game.dataValues.questions
                delete game.dataValues.userId
                data.game = game?.dataValues
            }

            res.status(200).json({
                ...user?.dataValues,
                game: game?.dataValues
            })

        } catch
            (error) {
            res.status(500).json({ error: 'Failed to fetch users' })
        }
    },
    updateAvatar: async (req: Request, res: Response) => {
        const body = req.body
        const { userId } = res.locals

        const { avatar } = body

        try {
            const [updatedCount, updatedRows] = await User.update(
                {
                    avatar
                },
                {
                    where: { id: userId },
                    returning: true
                }
            )
            res.json({
                updatedCount,
                updatedRows
            })
        } catch (error) {
            res.status(500)
        }
    },
    updateProfile: async (req: Request, res: Response) => {
        const body = req.body
        const { userId } = res.locals

        const {
            firstName,
            lastName,
            phone,

            city,

            isSeverstalEmployee,
            subdivision = "",
            jobTitle = "",

            isPrivacyPolicyConfirmed,
            isGameRulesConfirmed,
        } = body

        if (!isPrivacyPolicyConfirmed || !isGameRulesConfirmed) {
            res.status(400).json({ "error": "Необходимо согласиться с политикой конфиденциальности и правила игры" })
        }

        try {
            const [updatedCount, updatedRows] = await User.update(
                {
                    firstName,
                    lastName,
                    phone,

                    city,

                    isSeverstalEmployee,
                    subdivision,
                    jobTitle,

                    isPrivacyPolicyConfirmed,
                    isGameRulesConfirmed,
                },
                {
                    where: { id: userId },
                    returning: true
                }
            )

            res.status(200).json(updatedRows)
        } catch (error) {
            console.error('Error updating record:', error)
        }
    },
}
