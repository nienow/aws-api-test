const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.end('here');
});

router.get('/progress', (req, res) => {
    res.json({key: 'value'});
});

module.exports = router;
