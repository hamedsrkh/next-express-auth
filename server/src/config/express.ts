import express from 'express'
import passport from 'passport'
import router from '../routes'
import cors from 'cors'

const app = express()

app.use(passport.initialize())
// CORS options
const corsOptions = {
  origin: 'http://localhost:3000',
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', router)
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// })

export default app
