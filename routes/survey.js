const express = require('express')
const router = express.Router()
const Survey = require('../models/survey')

// survey page route
router.get('/', (req, res) => {
    console.log('Successful survey launch');
    res.render('survey')
})

// leave survey/review route
router.post('/', async(req, res) => {
    try{

        const data={
            service: req.body.service
        }

        await Survey.insertMany[(data)]

        res.render('index')

    }catch (e){

        console.log(e)
    }
})

module.exports = router