import express from 'express'
import passport from 'passport'
import router from '../routes'

require('dotenv').config()
const app = express()

app.use(passport.initialize())

app.use(express.json())
app.use('/api', router)

export default app
