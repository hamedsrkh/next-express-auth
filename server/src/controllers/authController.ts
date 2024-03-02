import prisma from '@prisma/prismaClient'
import { hashPassword } from '@src/services/authentication/auth'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { generateToken } from '@src/services/authentication/jwt'
import { validationResult } from 'express-validator'
import { sendEmailVerificationNotification } from '@src/notifications/emailVerificationNotification'

export async function register(req: Request, res: Response) {
  const { email, password, name } = req.body

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(403).json({ errors: errors.array() })
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  })

  if (existingUser) {
    return res.status(400).json({ message: 'email already taken' })
  }

  // Hash the password
  const hashedPassword = await hashPassword(password)

  // Create the user
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  try {
    await sendEmailVerificationNotification(newUser)
  } catch (e) {
    throw new Error('verification email not sent!')
  }

  res.json({ message: 'User registered successfully', userId: newUser.id })
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(403).json({ errors: errors.array() })
  }

  // Find the user by email
  const user = await prisma.user.findUnique({
    where: { email },
  })

  // Check if the user exists
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  // Verify the password
  const isPasswordValid = bcrypt.compareSync(String(password), user.password)

  if (isPasswordValid) {
    // Generate JWT token
    const token = generateToken(user.id)
    res.json({ id: user.id, email: user.email, name: user.name, accessToken: token })
  } else {
    res.status(401).json({ message: 'Invalid credentials' })
  }
}

export async function getUser(req: Request, res: Response) {
  res.json({ message: 'successful', user: req.user })
}
