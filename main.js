const Discord 		= require("discord.js")
const bot			= new Discord.Client({disableEveryone: true})
const config 		= require('./config.json')
const colorconfig 	= require('./colorconfig.json')
const helptext 		= require('./helptext.json')

bot.on("ready", async () => {
	//If bot started message(only Logs)
	console.log(`Logged in as ${bot.user.username}...`)
	bot.user.setActivity(`Hey! v${config.version}`)
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
	if (cmd === `${prefix}help`) {
		let botembed = new Discord.RichEmbed()
		.setDescription("Bot-Help")
		.setColor(colorconfig.purple)
		.addField(`${helptext.helptxt1}`,"::help")
		.addField(`${helptext.helptxt2}`,"::ping")
		.addField(`${helptext.helptxt3}`,"::hello")
		.addField(`${helptext.helptxt4}`,"::botinfo")
		return message.channel.send(botembed)
	}
});

//bot.login(process.env.token)
bot.login("MzkzODEzODY2OTE3OTIwNzcw.DbkE-g.D30Dm22Kb7jhFrdLpSVnM9CWbVQ")