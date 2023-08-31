function isAutorized(req, res, next){
    if(req.user){
        next()
    }else{
        res.redirect("/")
    }
}

function isNotAutorized(req, res, next){
    if(req.user){
        res.redirect("/dashboard")
    }else{
        next()
    }
}

module.exports = {
    isAutorized,
    isNotAutorized
}