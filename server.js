if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express');
const app = express();
//const path = require('path')
//const expressLayouts = require('express-ejs-layouts')
const indexRouter= require('./routes/index');
const loginRouter= require('./routes/login');

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to mongoose DB'))

app.set('view engine', 'ejs');
app.set('views', __dirname, 'views');
//app.set('layout', 'layouts/layout');
//app.use(expressLayouts)
//app.use(express.static('public'))
app.use(express.urlencoded({ extended: false}));
app.use('/', indexRouter);
app.use('/login', loginRouter)





/*app.get('/', (req, res,) =>{
    //console.log('Success');
    res.render('index');
});

app.get('/login', (req, res,) =>{
    //console.log('Success1');
    res.render('login');
});

app.post('/login', (req, res,) =>{
    
});

app.get('/register', (req, res,) =>{
    //console.log('Success2');
    res.render('register');
});

app.post('/register', (req, res,) =>{
    
}) */


app.listen(process.env.PORT || 3000);
