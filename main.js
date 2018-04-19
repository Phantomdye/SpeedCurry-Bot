const Discord   = require('discord.js')

const config    = require('./config.json')

var client = new Discord.Client()

client.on('ready', () => {
    console.log(`${client.user.name} is now loaded...`)
})

client.on('message', (msg) => {

    var cont = msg.content,
        author = msg.member

})

client.login(process.env.token)