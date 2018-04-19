const Discord   = require('discord.js')

const config    = require('./config.json')

var client = new Discord.Client()
var prefix = config.prefix
client.on('ready', () => {
    console.log(`${client.user.name} is now loaded...`)
})

var cmdmap = {
    say: cmd_say,
    ping: cmd_ping
}

function cmd_say(msg, args) {
    msg.channel.send(args.join(' '))
}
function cmd_ping(msg, args) {
    msg.channel.send('Ping!')
}

client.on('message', (msg) => {

    var cont = msg.content,
        author = msg.member

        if (author.id != client.user.if && cont.startsWith(prefix)) {
            var invoke = cont.split(' ')[0].substr(prefix.length),
                args   = cont.split(' ').slice[1]
            if (invoke in cmdmap) {
                cmdmap[invoke](msg, args)
            }
        }
})

client.login(process.env.token)