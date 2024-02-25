import { body } from 'express-validator'

function register() {
  return [body('name').notEmpty(), body('password').notEmpty(), body('email').notEmpty().isEmail()]
}

function login() {
  return [body('email').notEmpty().isEmail(), body('password').notEmpty()]
}

const authValidation = { register, login }

export default authValidation
