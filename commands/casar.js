const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.mentions.users.size < 1) return message.reply("Você precisa mencionar alguém.")
    let user = message.mentions.users.first()
if(user.id == message.author.id) return message.channel.send("Você não pode casar com si mesmo.")
  let member = message.mentions.users.first() || bot.users.get(args[0]) || message.author;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle(`:kiss: Beijoooo.`)
    .addField(`:kiss: está casando`,  ` ${message.author.tag} esta se casando com ${member.tag} \n ${message.author.tag} ame muito a(o) ${member.tag}.`)
    .setColor('#AE05BB')
    .setThumbnail(bot.user.avatarURL)
    .setImage('https://media.giphy.com/media/bMLGNRoAy0Yko/giphy.gif')
    return message.channel.send(botembed);
  }

module.exports.help = {
    name: "casar"
}
