import express from 'express';

import {getAgenda, newContact, getContact, deleteContact, updateContact} from '../controllers/agenda.js';

const router = express.Router();

router.get('/all',getAgenda);
router.post('/new',newContact);
router.get('/contact/:id',getContact);
router.delete('/delete/:id',deleteContact);
router.post('/update/:id',updateContact);

export default router;