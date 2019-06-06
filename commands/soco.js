const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.mentions.users.size < 1) return message.reply("Você precisa mencionar alguém.")
    let user = message.mentions.users.first()
if(user.id == message.author.id) return message.channel.send("Você não pode socar a si mesmo.")
  let member = message.mentions.users.first() || bot.users.get(args[0]) || message.author;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle(`:punch: Socou.`)
    .addField(`:punch: está socando`,  ` ${message.author.tag} esta socando ${member.tag} \n ${message.author.tag} pare de socar! ${member.tag}.`)
    .setColor('#AE05BB')
    .setThumbnail(bot.user.avatarURL)
    .setImage('https://media.giphy.com/media/Lx8lyPHGfdNjq/giphy.gif')
    return message.channel.send(botembed);
  }

module.exports.help = {
    name: "soco"
}