const mongoose = require ('mongoose')

const surveySchema = new mongoose.Schema({
    value: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model('Survey', surveySchema)