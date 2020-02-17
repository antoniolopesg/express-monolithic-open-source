const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.render('hello', { title: 'Página inicial' }));

module.exports = router;
