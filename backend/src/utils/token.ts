import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()

// Генерация токена
// export const generateToken = (payload: Record<string, string>) => {
//     return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES })
// }
//
// // Проверка токена
// export const verifyToken = (token: string) => {
//     return jwt.verify(token, process.env.JWT_SECRET)
// }
