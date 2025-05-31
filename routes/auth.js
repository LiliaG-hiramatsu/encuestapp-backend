import { Router } from 'express';
import register from '../controllers/auth/register.js';
import validator from '../middlewares/validator.js';
import registerSchema from '../schemas/register.js';
import existsUser from '../middlewares/existsUser.js';

let authRouter = Router()

authRouter.post('/registro', validator(registerSchema), existsUser, register)

export default authRouter