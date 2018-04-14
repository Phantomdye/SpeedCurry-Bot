const Discord 	= require("discord.js")
const bot 		= new Discord.Client({disableEveryone: true})
const fs		= require('fs')

const config = JSON.parse(fs.readFileSync('config.josn', 'utf8'))

bot.on("ready", async () => {
	console.log(`Logged in as ${bot.user.username}...`)
	bot.user.setActivity('Hey, whats up!')
});

bot.on("message", async message => {
	if (message.author.bot) return
	if (message.channel.type === "dm") return
	
	let messageArray = message.content.split(" ")
	let cmd = messageArray[0]
	let args = messageArray.slice(1)
	
	if (cmd === `${config.prefix}ping`) {
		message.channel.send("Pong!")
	}
});

bot.login(process.env.token)