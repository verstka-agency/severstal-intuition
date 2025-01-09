import express from 'express'
import { avatarsController } from "../controllers/avatarsController"

const router = express.Router()

router.get("/avatars", avatarsController.getAvatars)

export default router