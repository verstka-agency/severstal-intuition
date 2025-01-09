import { sequelize } from '../config/db'

import { DataTypes } from 'sequelize'
import { Group } from "../models/Group"

export const Avatar = sequelize.define(
    'Avatar', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        label: DataTypes.STRING,
        slug: DataTypes.STRING,
        groupId: {
            type: DataTypes.UUID, // Используйте DataTypes.UUID, а не UUIDV4
            allowNull: false, // Обязательно для связи
            references: {
                model: 'Groups', // Имя связанной таблицы
                key: 'id', // Поле, с которым связываем
            },
        },
    },
    {
        timestamps: false, // Отключает поля createdAt и updatedAt
    },
)