import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10
  return bcrypt.hash(String(password), saltRounds)
}

const prisma = new PrismaClient()

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY as string,
}

passport.use(
  new Strategy(options, async (payload, done) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: payload.id },
        select: { id: true, name: true, email: true },
      })

      if (user) {
        return done(null, user)
      } else {
        return done(null, false)
      }
    } catch (error) {
      return done(error, false)
    }
  }),
)

export const authenticate = passport.authenticate('jwt', { session: false })
