const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

  message.delete()
  var randomPuppy = require("random-puppy")
randomPuppy('pussy') //NÃO MUDAR ISSO
.then(url => {
  var pornnEmbed = new Discord.RichEmbed()
      .setTitle(':underage: NSFW :underage:')
      .setImage(url)
      .setColor('#000001')
  message.channel.send(pornnEmbed);
});
}

 module.exports.help = {
    name: "porn",
    usage: `nfsw`,
    information: "Comando de pornografia"
  }