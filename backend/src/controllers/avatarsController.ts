import { Request, Response } from "express"
import { Avatar } from "../models/Avatar/Avatar"

export const avatarsController = {
    getAvatars: async (req: Request, res: Response) => {
        if (req.query.id) {
            const avatar = await Avatar.findOne({
                where: { id: req.query.id as string }
            })
            if (!avatar) {
                res.status(404).json({ error: "Аватар не найден" })
                return
            }
            res.status(200).json(avatar)
            return
        }
        const avatars = await Avatar.findAll()
        res.status(200).json(avatars)
        return
    }
}