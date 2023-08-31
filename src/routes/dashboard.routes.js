const {Router} = require('express')
const {isAutorized} = require('../utils/auth')
const router = Router()

router.get('/', isAutorized, (req, res)=>{
    res.render('dashboard')
})

module.exports = router