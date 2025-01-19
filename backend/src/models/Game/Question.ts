import { sequelize } from '../../config/db'
import { DataTypes } from 'sequelize'

export const Question = sequelize.define(
    'Question',
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true
        },
        question: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
            defaultValue: 'mock.png',
        },
    },
    {
        timestamps: false, // Отключает поля createdAt и updatedAt
    }
)
