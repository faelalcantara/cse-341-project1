const router = require('express').Router();

router.get('/', (req, res) => {res.send('Hello World!')});

router.get('/contacts', (req, res) => {res.send('Hello World!')});

module.exports = router;