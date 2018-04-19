const { RichEmbed } = require('discord.js')
const helptxt       = require('./helptext.json')

const COLOR = {
    red: 0xe74c3c,
    green: 0x2ecc71,
    blue: 0x3498db,
    yellow: 0xf1c40f,
    orange: 0xe67e22,
    purple: 0x9b59b6,
    grey: 0x95a5a6
}
module.exports = {
    /**
     * 
     * @param {Discord.Channel} chan 
     * @param {string} cont 
     * @param {string} title 
     */
    error(chan, cont, title) {
        var message
        var emb = new RichEmbed()
            .setColor(COLOR.red)
            .setDescription(cont)
        if(title) {emb.setTitle(title)}
        chan.send('', emb).then((m) => {
            message = m
        })
        return message
    },
    info(chan, cont, title) {
        var emb = {
            embed: {
                color: COLOR.green,
                description: cont,
                title: title,
                fields: [
                    {
                        name: "test",
                        value: "test",
                        inline: false
                    }
                ]
            }
        }
        chan.send('', emb)
    },
    help(chan, cont, title) {
        var message
        var emb = new RichEmbed()
            .setColor(COLOR.yellow)
            .setDescription(cont)
        if(title) {emb.setTitle(title)}
        chan.send('', emb).then((m) => {
            message = m
        })
        return message
    }
}