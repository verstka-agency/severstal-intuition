import express from 'express'
import { gameController } from "../controllers/gameController"

const router = express.Router()

router.get("/game/current-question", gameController.getCurrentQuestion)
router.post("/game/send-answer", gameController.sendAnswer)
router.post("/game/additional-games", gameController.additionalGames)
router.post("/game/end-round", gameController.endRound)
router.get('/game/dashboard', gameController.dashboard)
router.get('/game/current-position', gameController.currentPosition)
router.get('/game/round-preview', gameController.roundPreview)

export default router