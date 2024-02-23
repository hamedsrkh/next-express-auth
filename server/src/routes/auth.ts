import express from 'express'
import { authenticate } from '@src/services/authentication/auth'
import {getUser, login, register} from "@src/controllers/authController";

const router = express.Router()

router.post('/register', register)

router.post('/login', login)

router.get('/user', authenticate, getUser)

export default router
