const {Router} = require('express')
const passport = require('passport')
const { isNotAutorized, isAutorized } = require('../utils/auth')
const router = Router()

router.get('/', isNotAutorized, passport.authenticate('discord'))

router.get(
    '/redirect', 
    passport.authenticate('discord', {
        successRedirect: "/dashboard",
        failureRedirect: "/"
    })
)

router.get('/logout', isAutorized, (req, res) =>{
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
})

module.exports = router