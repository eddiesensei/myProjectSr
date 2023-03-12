const express = require('express')
const router = express.Router()

router.get('/', (req, res,) =>{
    console.log('Successful registration launch');
    res.render('register');
})

module.exports = router