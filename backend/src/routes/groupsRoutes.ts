import express from 'express'
import { groupsContoller } from "../controllers/groupsContoller"

const router = express.Router()

router.get("/groups", groupsContoller.getGroups)

export default router