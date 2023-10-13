import express from 'express';
import { user } from '../Controllers/User.controllers.js';

const router = express.Router();

router.get('/',user)

export default router;