const {Router} = require('express')
const passport = require('passport')
const router = Router()

router.get('/', passport.authenticate('discord'))

router.get(
    '/redirect', 
    passport.authenticate('discord', {
        successRedirect: "/dashboard",
        failureRedirect: "/"
    })
)

module.exports = router