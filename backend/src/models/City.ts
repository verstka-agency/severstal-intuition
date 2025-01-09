// models/user.js
import { sequelize } from '../config/db'

import { DataTypes } from 'sequelize'

export const City = sequelize.define(
    'City', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        label: DataTypes.TEXT,
        group: DataTypes.TEXT
    },
    {
        timestamps: false, // Отключает поля createdAt и updatedAt
    },
)