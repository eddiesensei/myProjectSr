if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const path = require('path')
//const expressLayouts = require('express-ejs-layouts')
const indexRouter= require('./routes/index')
const loginRouter= require('./routes/login')
const registerRouter= require('./routes/register')
const dotenv = require('dotenv')

//mongodb stuff---------------------------------------------------------------------------
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to mongoose DB'))
//------------------------------------------------------------------------------------

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
//app.set('layout', 'layouts/layout');

//app.use(expressLayouts)
//app.use(express.static('public'))
app.use(express.urlencoded({ extended: false}))
app.use('/', indexRouter);
app.use('/login', loginRouter)
app.use('/register', registerRouter)

app.listen(process.env.PORT || 3000);