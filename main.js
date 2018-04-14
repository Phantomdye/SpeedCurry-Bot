const Discord = require("discord.js")
const bot			= new Discord.Client({disableEveryone: true})
const config 	= require(',/config.json')
const Embeds 	= require('./embeds')

bot.on("ready", async () => {
	console.log(`Logged in as ${bot.user.username}...`)
<<<<<<< HEAD
	bot.user.setActivity('Hey! ::botinfo')
=======
	bot.user.setActivity('Prefix: "::"')
>>>>>>> fe8eb54d193cccc69b5ba21e6d36cd9480655ebf
});

bot.on("message", async message => {
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
		.setColor(Embeds.green)
		.addField("Bot Name: ", bot.user.username);

		return message.channel.send(botembed);
	}

});

bot.login(process.env.token)
