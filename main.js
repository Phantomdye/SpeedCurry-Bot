const Discord   = require('discord.js')
const config    = require('./config.json')
const embeds    = require('./embed.js')
const helptxt   = require('./helptext.json')
const COLORS    = require('./colorconfig.json')

var client = new Discord.Client()
var prefix = config.prefix
client.on('ready', () => {
    console.log(`${client.user.username} is now loaded...`)
    client.user.setActivity(`Hey! v${config.version}`)
})

var cmdmap = {
    say: cmd_say,
    ping: cmd_ping,
    //test: cmd_test,
    help: cmd_help
}

function cmd_say(msg, args) {
    msg.channel.send(args.join(' '))
}
function cmd_ping(msg, args) {
    msg.channel.send('Pong!')
}
function cmd_test(msg, args) {
    //embeds.error(msg.channel, 'This is a test!', 'Not an error')
    embeds.info(msg.channel, "This is a content.")
}
function cmd_help(msg, args) {
    let embed = new Discord.RichEmbed()
    .setDescription("Bot-Help")
    .setColor(COLORS.yellow)
    .addField(`${helptxt.h1}`,"::help")
    .addField(`${helptxt.h2}`,"::ping")
    .addField(`${helptxt.h3}`,"::hello")
    .addField(`${helptxt.h4}`,"::botinfo")
    return msg.channel.send(embed)
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