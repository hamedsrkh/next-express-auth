import jwt from 'jsonwebtoken'

export const generateToken = (userId: number): string => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY as string, {
    expiresIn: '7d',
  })
}
