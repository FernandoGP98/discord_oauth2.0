
const {Strategy} = require('passport-discord')
//const {Strategy} = require('passport-custom')
//const {Strategy} = require('passport-oauth2');

const passport = require('passport')

const {DISCORD_CLIENT_ID, DISCORD_SECRET_ID} = require('../config')
const User = require('../models/user')

passport.serializeUser((user, done) =>{
    done(null, user.id)
})

passport.deserializeUser(async (id, done) =>{
    const userById = await User.findById(id)
    if(userById !== undefined && userById !== null)done(null, userById)
})

passport.use('discord', new Strategy(
    {
        // authorizationURL: 'https://discord.com/api/oauth2/authorize',
        // tokenURL: 'https://discord.com/api/oauth2/token',
        clientID: DISCORD_CLIENT_ID,
        clientSecret: DISCORD_SECRET_ID,
        callbackURL: '/auth/redirect',
        scope: ['identify', 'guilds'],
    },
    async (accessToken, refreshToken, profile, done) => {
    try{
        const user = await User.findOne({discordId: profile.id})
        if(user !== undefined && user !== null){
            return done(null, user)
        }
        const newUser = new User({
            discordId: profile.id,
            username: profile.username,
            guilds: profile.guilds
        })
        await newUser.save()
    
        done(null, newUser)
    }catch(error){
        console.log(error)
        return done(error, null)
    }
}))