const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('home'));

router.get('/movies', (req, res) => {
    const movies = req.data
})

module.exports = router;
