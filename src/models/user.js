const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    discordId:{
        type: String,
        require: true,
    },
    username:{
        type: String,
        require: true,
    },
    guilds:{
        type: Array,
        require: true,
    }
},{
    timestamps: true
})

module.exports = model('user', userSchema)