import express from 'express'
import { authenticate } from '@src/services/authentication/auth'
import { getUser, login, register } from '@src/controllers/authController'
import authValidation from '@src/validations/authValidation'

const router = express.Router()

router.post('/register', authValidation.register(), register)

router.post('/login', authValidation.login(), login)

router.get('/user', authenticate, getUser)

export default router
