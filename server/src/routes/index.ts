import express from 'express'
import publicRoutes from './public'
import authRoutes from './auth'
const router = express.Router()

router.use('/', publicRoutes)
router.use('/auth', authRoutes)

export default router
