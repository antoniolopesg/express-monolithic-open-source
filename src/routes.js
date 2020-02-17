import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.render('hello', { title: 'Página inicial' }));

export default router;
