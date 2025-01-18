// controllers/userController.js
import { User } from '../models/User'
import { Request, Response } from 'express'

export const userController = {
    getProfile: async (req: Request, res: Response) => {
        const { userId } = res.locals

        try {
            const users = await User.findOne({
                where: {
                    id: userId
                }
            })
            // TODO Если юзер не найден?
            res.status(200).json(users)
        } catch
            (error) {
            res.status(500).json({ error: 'Failed to fetch users' })
        }
    },
    updateProfile: async (req: Request, res: Response) => {
        const body = req.body
        const { userId } = res.locals

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

            res.status(200).json(updatedRows)
        } catch (error) {
            console.error('Error updating record:', error)
        }
    }
}
