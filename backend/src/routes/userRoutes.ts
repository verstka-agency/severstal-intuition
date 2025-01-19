// routes/userRoutes.js
import express from 'express'
import { userController } from '../controllers/userController'

const router = express.Router()

router.get('/user', userController.getProfile)
router.patch('/user', userController.updateProfile)
router.patch('/user/avatar', userController.updateAvatar)


export default router