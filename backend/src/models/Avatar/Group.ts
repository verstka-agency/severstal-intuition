import { sequelize } from '../../config/db'

import { DataTypes } from 'sequelize'

// Это группы аватарок
export const Group = sequelize.define(
    'Group', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        slug: DataTypes.STRING,
        label: DataTypes.STRING
    },
    {
        timestamps: false, // Отключает поля createdAt и updatedAt
    },
)