import express from 'express'
import { getStore, updateStore, createStore } from '../controllers/storeController.js';
import { admin, protect } from '../middleware/protectMiddleware.js';


const router = express.Router()


router.post('/create', protect, admin, createStore)
router.route('/:id').put(protect, admin, updateStore)
router.get('/:id', protect, admin, getStore)

export default router;