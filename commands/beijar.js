const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.mentions.users.size < 1) return message.reply("Você precisa mencionar alguém.")
    let user = message.mentions.users.first()
if(user.id == message.author.id) return message.channel.send("Você não pode beijar a si mesmo.")
  let member = message.mentions.users.first() || bot.users.get(args[0]) || message.author;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor('Você está preste a beijar', "https://discordemoji.com/assets/emoji/8757_heartbeat_anim.gif")
    .setTitle(`:kiss: Beijoooo.`)
    .addField(`:kiss: Bee.. Bee... Beijoooo!`,  ` ${message.author.tag} está beijando ${member.tag} \n ${message.author.tag} da um beijo gostoso em ${member.tag}.`)
    .setColor('#AE05BB')
    .setThumbnail(bot.user.avatarURL)
    .setImage('https://pa1.narvii.com/6214/5c506d2760822b9bc97f30eebd75a31ae73a0b2a_hq.gif')
    return message.channel.send(botembed);
  }

module.exports.help = {
    name: "beijar"
}
