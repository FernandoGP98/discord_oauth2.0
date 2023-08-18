require('dotenv').config()

module.exports={
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/discordapp',
    PORT: process.env.PORT || 3000,
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    DISCORD_SECRET_ID: process.env.DISCORD_SECRET_ID
}
