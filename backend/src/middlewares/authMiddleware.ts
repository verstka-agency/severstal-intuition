// middlewares/authMiddleware.js
import jwt, { JwtPayload } from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { config } from "dotenv"

config()

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers

    if (authorization === undefined) {
        res.status(403).json({ error: 'В заголовке отсутствует токен' })
        return
    }

    const token = authorization.split(" ")[1]

    jwt.verify(token, process.env.JWT_SECRET!!, (err, decoded) => {
        if (err) {
            res.status(401).json({ error: 'Invalid token' })
            return
        }
        if (typeof decoded !== "string" && typeof decoded !== "undefined") {
            res.locals = {
                userId: decoded.id
            }
        }
        next()
    })
}