import express from 'express';
import { getAllUsers } from '../controller/WalletController.js';

const router = express.Router();

router.get('/walletdata', getAllUsers);

export default router;