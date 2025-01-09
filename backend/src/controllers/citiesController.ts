import { Request, Response } from "express"
import { City } from "../models/City"

export const citiesController = {
    getCities: async (req: Request, res: Response) => {
        try {
            const cities = (await City.findAll()).map((city) => {
                const data = city.dataValues
                return {
                    label: data.label,
                    value: data.id,
                    group: data.group
                }
            })

            res.status(200).json(cities)
        } catch (error) {
            res.status(400).json({ "error": "Ошибка при получении городов" })
        }
    }
}