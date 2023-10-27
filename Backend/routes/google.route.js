import express from 'express';
import { google } from '../Controllers/Google.controller.js';

const router = express.Router();

router.post('/',google)

export default router;