import express from 'express'
import { authController } from "../controllers/authController"


const router = express.Router()


// Отправить magic link
router.post('/send-magic-link', authController.sendMagicLink)

// Генерация токена
// TODO удалить это
router.post("/token", authController.generateToken)

export default router