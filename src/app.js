const express = require('express');
const session = require('express-session');
const MongoStore = require("connect-mongo")
const passport = require('passport');
const path = require('path');
const { MONGODB_URI, SECRET } = require('./config');

const app = express()
require('./strategies/discordStrategy')

//SETTINGS
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'views'))

//MIDDLEWARE
app.use(session({
    secret: SECRET,
    name: "discord-outh2",
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
        mongoUrl: MONGODB_URI
    }),
    cookie:{
        maxAge: 60000 * 60 * 24, //1 dia
    }
}))
app.use(passport.initialize())
app.use(passport.session())

//GLOBAL VARIABLES
//Middleware con los datos del despues del auth
app.use((req, res, next)=>{
    //local variable internet de express
    app.locals.user = req.user
    next();
})

//ROUTES
app.use('/', require('./routes/index.routes'))
app.use('/auth', require('./routes/auth.routes'))
app.use('/dashboard', require('./routes/dashboard.routes'))

module.exports = app