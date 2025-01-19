import express from 'express'
import { gameController } from "../controllers/gameController"

const router = express.Router()

router.get("/game/current-question", gameController.getCurrentQuestion)
router.post("/game/send-answer", gameController.sendAnswer)

export default router