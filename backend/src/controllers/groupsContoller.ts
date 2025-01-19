import { Request, Response } from "express"
import { Group } from "../models/Avatar/Group"

export const groupsContoller = {
    getGroups: async (req: Request, res: Response) => {
        try {
            const groups = await Group.findAll()
            res.status(200).json(groups)
        } catch (error) {
            res.status(400).json({ "error": "Ошибка при получении городов" })
        }
    }
}