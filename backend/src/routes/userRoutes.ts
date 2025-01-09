// routes/userRoutes.js
import express from 'express'
import { userController } from '../controllers/userController'

const router = express.Router()

router.get('/user', userController.read)
router.post('/user', userController.create)
router.patch('/user', userController.update)

export default router