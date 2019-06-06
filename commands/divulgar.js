const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
    message.delete()
	let target = message.author
    if(message.member.hasPermission("KICK_MEMBERS")) {
        const color = args[1]
        const text = args.slice(1).join(" ");
        if (text.length < 1) return message.channel.send("Você ainda não mandou o link do video");
        const embed = new Discord.RichEmbed()
		.setAuthor(`Divulgado por: ${target.username}`, message.author.displayAvatarURL)
        .setColor("#AE05BB")
        .setTitle(":play_pause:  Divulgação:")
        .setDescription(text)
		.setFooter("", bot.user.displayAvatarURL)
		
        message.channel.send("")
        message.channel.send({embed})

  }
};

module.exports.help = {
    name: "divulgar"
}