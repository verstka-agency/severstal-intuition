import express from 'express'
import userRoutes from './routes/userRoutes'
import { config } from 'dotenv'
import { sequelize } from "./config/db"
import authRoutes from "./routes/authRoutes"
import citiesRoutes from "./routes/citiesRoutes"
import cors from 'cors'
import { City } from "./models/City"
import cities from './utils/cities'
import { authMiddleware } from "./middlewares/authMiddleware"
import { User } from "./models/User"
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from "./config/swaggerConfig"
import { Avatar } from "./models/Avatar"
import { avatars } from "./utils/avatars"
import avatarsRoutes from "./routes/avatarsRoutes"
import { Group } from "./models/Group"
import { groups } from "./utils/groups"
import groupsRoutes from "./routes/groupsRoutes"

config()

const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use('/api/public', citiesRoutes)
app.use('/api/public', authRoutes)
app.use('/api/public', avatarsRoutes)
app.use('/api/public', groupsRoutes)
app.use('/api/private',
    authMiddleware,
    userRoutes
)

// Удалить этот эндпоинт позже
// Подключение Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Разрешить запросы с localhost:3000
app.use(
    cors({
        origin: 'http://localhost:3000', // Разрешённый источник (React)
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Разрешённые HTTP-методы
        allowedHeaders: ['Content-Type', 'Authorization'], // Разрешённые заголовки
        credentials: true, // Если требуется отправка куков или токенов
    })
)

// Отправка данных формы надо через HMAC?

// TODO логирование и отправка уведомлений об ошибках в телегу
app.listen(PORT, async () => {
    await sequelize.sync({ force: true })  // { force: true } удаляет и пересоздает таблицу
        .then(() => {
            console.log('Table created')
        })
        .catch((error) => {
            console.error('Error creating table:', error)
        })
    await City.bulkCreate(cities)
    await User.create({
        id: "54163575-a6b1-4684-8e4e-88cfa09f962a",
        email: "hello@verstka.agency",
        phone: "+37455544303",
        firstName: "Карен",
        lastName: "Мартиросян"
    })
    const createdGroups = await Group.bulkCreate(groups)
    const formattedGroups = createdGroups
        .map((createdGroup) => {
            return {
                slug: createdGroup.dataValues.slug,
                id: createdGroup.dataValues.id
            }
        })
    const formattedAvatars = avatars.map((avatar) => {
        const id = formattedGroups.filter((group) => {
            return group.slug === avatar.group
        })[0].id
        return {
            label: avatar.label,
            slug: avatar.slug,
            groupId: id
        }
    })
    await Avatar.bulkCreate(formattedAvatars)
    // try {
    //     // Проверка подключения к базе данных
    //     await sequelize.authenticate()  // Попытка подключения
    //     console.log('Connection to the database has been established successfully.')
    //
    //     console.log(`Server is running on port ${PORT}`)
    // } catch (error) {
    //     console.error('Unable to connect to the database:', error)
    // }
    console.log(`Server is running on port ${PORT}`)
})
