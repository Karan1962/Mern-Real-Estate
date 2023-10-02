import express from 'express';
import { Auth } from '../Controllers/Auth.controller';

const router = express.Router();

router.post('/signup',Auth)