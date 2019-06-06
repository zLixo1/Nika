const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  
    let user = message.mentions.users.first() || message.author;
    if(message.mentions.users.size < 0) return message.reply(":flag_br: | Você precisa mencionar alguém.")
    var embed =  new Discord.RichEmbed()
      .setImage(user.displayAvatarURL)
      .setColor('#AE05BB')
      .setTitle('Avatar')
      .setFooter(`message.guild.iconURL`)
      .setFooter(`<@${user}>`)
      .setDescription(user+":flag_br: |  "+"[Click aqui]("+user.displayAvatarURL+")")
      .setFooter(`Criado por ${bot.user.tag}`, (bot.user.displayAvatarURL))
      message.channel.send(embed);
}

module.exports.help = {
    name: "avatar"
}