import { Sequelize } from 'sequelize'
import { config } from 'dotenv'

config()

// Создаем подключение к PostgreSQL
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
export const sequelize = new Sequelize(
    process.env.PG_DATABASE!!,
    process.env.PG_USER!!,
    process.env.PG_PASSWORD, {
        host: process.env.PG_HOST,
        dialect: 'postgres',
        // logging: console.log,  // Логирование SQL-запросов
    })
