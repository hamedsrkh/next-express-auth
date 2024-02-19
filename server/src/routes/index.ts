import express from "express";
const router = express.Router()
import publicRoutes from './public'
import authRoutes from './auth'

router.use('/', publicRoutes)
router.use('/auth', authRoutes)

export default router;