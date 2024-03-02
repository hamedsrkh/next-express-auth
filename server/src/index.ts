import 'dotenv/config'
import app from './config/express'

const PORT = process.env.PORT || 8085
app.listen(PORT, () => console.log(`🚀 Server ready at: http://localhost:${PORT}`))
