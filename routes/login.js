const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
    console.log('Successful login page')
    res.render('login');
})

module.exports = router