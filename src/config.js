require('dotenv').config()

module.exports={
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/discordapp',
    SECRET: process.env.SECRET || 'some random secret',
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    DISCORD_SECRET_ID: process.env.DISCORD_SECRET_ID
}
