const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path')

require('./strategies/discordStrategy')

const app = express()
//SETTINGS
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'views'))

//MIDDLEWARE
app.use(session({
    secret: 'some secret',
    saveUninitialized: false,
    resave: false,
}))
app.use(passport.initialize())
app.use(passport.session())

//GLOBAL VARIABLES


//ROUTES
app.use('/', require('./routes/index.routes'))
app.use('/auth', require('./routes/auth.routes'))
app.use('/dashboard', require('./routes/dashboard.routes'))

module.exports = app