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
import { Group } from "./models/Avatar/Group"
import { groups } from "./utils/groups"
import groupsRoutes from "./routes/groupsRoutes"
import { Question } from "./models/Game/Question"
import { questions } from "./utils/questions"
import { Answer } from './models/Game/Answer'
import { users } from './utils/user'
import gameRoutes from './routes/gameRoutes'
import { avatars } from './utils/avatars'
import avatarsRoutes from "./routes/avatarsRoutes"
import { Avatar } from './models/Avatar/Avatar'
import { Game } from './models/Game/Game'

config()

const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use('/api/private', authMiddleware, citiesRoutes)
app.use('/api/public', authRoutes)
app.use('/api/private', authMiddleware, avatarsRoutes)
app.use('/api/private', authMiddleware, groupsRoutes)
app.use('/api/private', authMiddleware, userRoutes)
app.use('/api/private', authMiddleware, gameRoutes)

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
    await sequelize.sync({ force: false })  // { force: true } удаляет и пересоздает таблицу

    // /**
    //  * Cоздание и заполнение таблицы городов
    //  */
    // await City.bulkCreate(cities)
    // /**
    //  * Создание групп аватарок и аватарок
    //  */
    // const createdGroups = await Group.bulkCreate(groups)
    // const formattedGroups = createdGroups
    //     .map((createdGroup) => {
    //         return {
    //             slug: createdGroup.dataValues.slug,
    //             id: createdGroup.dataValues.id
    //         }
    //     })
    //
    // const formattedAvatars = avatars.map((avatar) => {
    //     const id = formattedGroups.filter((group) => {
    //         return group.slug === avatar.group
    //     })[0].id
    //     return {
    //         label: avatar.label,
    //         slug: avatar.slug,
    //         groupId: id
    //     }
    // })
    //
    // await Avatar.bulkCreate(formattedAvatars)
    // /**
    //  * Создание вопросов и ответов
    //  */
    //
    // const createdQuestions = await Question.bulkCreate(
    //     questions.map((question) => ({
    //         author: question.author,
    //         question: question.question,
    //         city: question.city,
    //         avatar: question.avatar,
    //     }))
    // )
    //
    // questions.forEach((question, index) => {
    //     const { answers } = question
    //
    //     Answer.bulkCreate(answers.map((answer) => {
    //         return {
    //             ...answer,
    //             question: createdQuestions[index].dataValues.id
    //         }
    //     }))
    // })

    console.log(`Server is running on port ${PORT}`)
})
