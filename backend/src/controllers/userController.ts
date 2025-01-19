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
    dashboard: async (req: Request, res: Response) => {
        try {

            res.status(200).send([])

            // =======

            // const users = await User.findAll({
            //     order: [['money', 'DESC']],
            // })

            // Шаг 4: Находим индекс пользователя среди всех пользователей
            // const userIndex = users.findIndex(user => user.dataValues.id === userId)
            // if (userIndex === -1) {
            //     res.status(404).json({ message: 'Пользователь не найден' })
            // }

            // Шаг 5: Позиция пользователя среди всех
            // let position = userIndex + 1 // Индексация с 1

            // Шаг 6: Если у пользователя есть такие же деньги, как у предыдущего, то они занимают одинаковую позицию
            // const userMoney = users[userIndex].dataValues.money
            // for (let i = userIndex - 1; i >= 0; i--) {
            //     if (users[i].dataValues.money === userMoney) {
            //         position--
            //     } else {
            //         break
            //     }
            // }
            //
            // delete users[userIndex].dataValues.questionsIds

            // res.status(200).json({
            //     ...users[userIndex].dataValues,
            //     position: position
            // })

            // =======


            // // Шаг 1: Получаем 15 самых больших уникальных значений money
            // const uniqueTopValues = await User.findAll({
            //     attributes: [[sequelize.fn('DISTINCT', sequelize.col('money')), 'money']],
            //     order: [['money', 'DESC']],
            //     limit: 15,
            // })
            //
            // // Извлекаем только значения money из результата
            // const topValues = uniqueTopValues.map((user) => user.dataValues.money)
            //
            // // Шаг 2: Получаем всех пользователей, чье значение money попадает в топ 15
            // const topUsers = await User.findAll({
            //     where: {
            //         money: {
            //             [Op.in]: topValues, // Проверяем, что money соответствует одному из топовых значений
            //         },
            //     },
            //     order: [['money', 'DESC']],
            // })
            //
            // // Шаг 3: Для каждого пользователя находим его позицию среди 15 значений
            // const usersWithPosition = topUsers.map((user) => {
            //     // Находим позицию пользователя среди уникальных значений
            //     const position = topValues.findIndex((value) => value === user.dataValues.money) + 1
            //
            //     return {
            //         ...user.toJSON(), // преобразуем объект пользователя в обычный объект
            //         position, // Добавляем позицию
            //     }
            // }).map((user) => {
            //     return {
            //         money: user.money,
            //         position: user.position,
            //         firstName: user.firstName,
            //         lastName: user.lastName
            //     }
            // })
            //
            // // Возвращаем результат
            // res.json(usersWithPosition)
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Ошибка при обработке запроса' })
        }
    },
}
