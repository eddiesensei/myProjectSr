const express = require('express')
const router = express.Router()
const User = require('../models/users')

// All Users route
router.get('/', (req, res) => {
     res.render('register')
     console.log('Successful register launch')
})

// New User route
/*
router.get('/new', (req, res) => {
     res.render('users/new', { user: new User()})
})
*/

// Create User Route
router.post('/', async(req, res) => {
     

     try{
          const data={
               firstname: req.body.firstname,
               lastname: req.body.lastname,
               email: req.body.email,
               password: req.body.password,
     
          }

          await User.insertMany([data])

          res.render('login')


     }catch (e){
          console.log(e)
     }
     

})

module.exports = router