import express from 'express'
import {cal} from  '../controllers/Cal.js'

const router = express.Router()
router.post("/Calculate",cal)

export default router