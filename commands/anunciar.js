const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
    message.delete()
	let target = message.author
    if(message.member.hasPermission("ADMINISTRATOR")) {
        const text = args.slice(0).join(' ');
        if (text.length < 1) return message.channel.send("Caso você tenha dado `/anunciar (msg)`\ esta errado ! digite \`/anunciar a (msg)\`");
        const embed = new Discord.RichEmbed()
		.setAuthor(`Postado por: ${target.username}`, message.author.displayAvatarURL)
        .setColor("#AE05BB")
        .setTitle("Anúncio:")
        .setDescription(text)
		.setFooter("-", bot.user.displayAvatarURL)
		.setTimestamp()
        message.channel.send(`@everyone`)
        message.channel.send({embed})

  }
};

module.exports.help = {
    name: "anunciar"
}