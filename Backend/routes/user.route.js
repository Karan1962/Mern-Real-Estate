import express from 'express';
import { test } from '../Controllers/User.controllers.js';

const router = express.Router();

router.get('/',test)

export default router;