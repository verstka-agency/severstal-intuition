// routes/userRoutes.js
import express from 'express'
import { userController } from '../controllers/userController'

const router = express.Router()

router.get('/user', userController.getProfile)
router.patch('/user', userController.updateProfile)

export default router