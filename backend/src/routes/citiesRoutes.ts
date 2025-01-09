import express from 'express'
import { citiesController } from "../controllers/citiesController"

const router = express.Router()

router.get("/cities", citiesController.getCities)

export default router