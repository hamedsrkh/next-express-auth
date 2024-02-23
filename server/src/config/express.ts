import express from 'express'
import passport from 'passport'
import router from '../routes'
import cors from 'cors'
import { config } from 'dotenv'

config()
const app = express()

app.use(passport.initialize())
// CORS options
const corsOptions = {
  origin: 'http://localhost:3000',
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', router)

export default app
