const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
let bicon = bot.user.displayAvatarURL;
let botembed = new Discord.RichEmbed()
.setDescription(`Informacões da ${bot.user.username} \n\n\nVersão do **BOT**: 1.00`)
.setColor("0x36393e")
.setThumbnail(bicon)
.addField("📃 Nome do bot", bot.user.username)
.addField("💻 Servidores conectados agora:", bot.guilds.size)
.addField("👑 Criador:", "`__ᐯσx𝔂Ɗ𝔢𝐯 {sTg} 𝐒𝐌𝐎𝐊𝐄│𝐒𝐇𝐎𝐏#0002__`")
.addField("💈 Prefixo:","`/` ")
.addField("👤 Usuários conectados agora:", bot.users.size)
.addField('📝Site', `[Click Aqui](https://collegiate-diaphrag.000webhostapp.com/site/index.html)`)
.setImage('https://cdn.discordapp.com/attachments/529064545478508544/547041937073373194/rainbow.gif')

return message.channel.send(botembed);

}

module.exports.help = {
  name: "botinfo"
}