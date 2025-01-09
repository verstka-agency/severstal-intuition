// models/user.js
import { sequelize } from '../config/db'
import { DataTypes } from 'sequelize'

export const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    avatar: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        },
    },
    firstName: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    lastName: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    city: {
        type: DataTypes.UUID,
        defaultValue: null
    },
    phone: {
        type: DataTypes.STRING
    },
    isSeverstalEmployee: {
        type: DataTypes.STRING,
        defaultValue: "Нет",
        allowNull: false
    },
    subdivision: {
        type: DataTypes.STRING,
        defaultValue: ""
    },
    jobTitle: {
        type: DataTypes.STRING,
        defaultValue: ""
    },
    isPrivacyPolicyConfirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    isGameRulesConfirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    currentRound: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    money: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    lives: {
        type: DataTypes.INTEGER,
        defaultValue: 5,
        allowNull: false
    }
})