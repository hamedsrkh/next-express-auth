import { v4 as uuidv4 } from 'uuid'
import prisma from '@prisma/prismaClient'
import { compileTemplate, sendEmail } from '@src/services/email'
import { User } from '@prisma/client'

export async function sendEmailVerificationNotification(user: User) {
  const verificationToken = uuidv4()
  const expires = new Date()
  expires.setHours(expires.getHours() + 48)

  await prisma.emailVerificationToken.create({
    data: {
      token: verificationToken,
      userId: user.id,
      expires,
    },
  })

  const verificationLink = `${process.env.DOMAIN}/verify?token=${verificationToken}`

  await sendEmail({
    to: user.email,
    subject: 'Verify Your Email',
    html: compileTemplate('EmailVerification', { verificationLink }),
  })
}
