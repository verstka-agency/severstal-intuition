import { sequelize } from '../../config/db'
import { DataTypes } from "sequelize"
import { Question } from "./Question"

export const Answer = sequelize.define(
    'Answer',
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isCorrect: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        question: {
            type: DataTypes.UUID,
        }
    },
    {
        timestamps: false,
    }
)