const Discord 		= require("discord.js")
const bot					= new Discord.Client({disableEveryone: true})
const config 			= require('./config.json')
const colorconfig = require('./colorconfig.json')

bot.on("ready", async () => {
	console.log(`Logged in as ${bot.user.username}...`)
	bot.user.setActivity('Hey! ::botinfo')
});

bot.on("message", async (message) => {
	if (message.author.bot) return
	if (message.channel.type === "dm") return

	let prefix = config.prefix
	let messageArray = message.content.split(" ")
	let cmd = messageArray[0]
	let args = messageArray.slice(1)

//Commands
	if (cmd === `${prefix}ping`) {
		message.channel.send("Pong!")
	}
	if (cmd === `${prefix}hello`) {
		message.channel.send("Hey!")
	}
	if (cmd === `${prefix}botinfo`) {
		let botembed = new Discord.RichEmbed()
		.setDescription("Bot Information")
		.setColor(colorconfig.green)
		.addField('Bot Name: ', bot.user.username)
		return message.channel.send(botembed)
	}
//---------------Voting--------------------
	if(cmd === `${prefix}vote`) {
	reaction.message.channel.send(`The emoji used is ${reaction.emoji}`)

	}
});

bot.login(process.env.token)
