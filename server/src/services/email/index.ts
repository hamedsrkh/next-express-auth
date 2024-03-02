import { createTransport } from 'nodemailer'
import fs from 'fs'
import Handlebars from 'handlebars'
import path from 'path'

interface EmailOptions {
  to: string
  subject: string
  text?: string
  html?: string
}
export const transporter = createTransport({
  host: process.env.MAIL_HOST || 'sandbox.smtp.mailtrap.io',
  port: Number(process.env.MAIL_PORT) || 2525,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
})

// Function to send emails
export const sendEmail = async (options: EmailOptions) => {
  try {
    const info = await transporter.sendMail({
      from: '"Hamedsrk" <hamedsarkhoshsa@gmail.com>',
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    })

    console.log('Message sent: %s', info.messageId)
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}
export const compileTemplate = (templateName: string, data: object) => {
  const templatePath = path.join(__dirname, 'templates', `${templateName}.html`)
  const source = fs.readFileSync(templatePath, 'utf-8')
  const template = Handlebars.compile(source)
  return template(data)
}
