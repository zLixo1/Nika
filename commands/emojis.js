const Discord = require("discord.js");

exports.run = (client, message, args) => {
let emojis = message.guild.emojis.map(a => a).join(' ')
let servernome = message.guild.name
let servericone = message.guild.iconURL
let cor = '0x36393e'

let emojiembed = new Discord.RichEmbed()
.setColor(cor)
.setAuthor(`Aqui os emojis do servidor - ${servernome}`, servericone)
.setDescription(` ${emojis}`)

message.channel.send(emojiembed);
}
module.exports.help = {
    name: "emojis"
  };