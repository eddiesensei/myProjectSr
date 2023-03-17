const express = require('express')
const router = express.Router()
const User = require('../models/users')

// All Users route
router.get('/', (req, res) => {
     res.render('register')
})

// New User route
router.get('/new', (req, res) => {
     res.render('users/new', { user: new User()})
})

// Create User Route
router.post('/', (req, res) => {
     res.send('Create')
})

module.exports = router