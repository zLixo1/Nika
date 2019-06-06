const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

  message.delete()
  var randomPuppy = require("random-puppy")
randomPuppy('anime') //NÃO MUDAR ISSO
.then(url => {
  var pornnEmbed = new Discord.RichEmbed()
      .setTitle('Seu anime aqui')
      .setImage(url)
      .setColor('#000001')
  message.channel.send(pornnEmbed);
});
}

 module.exports.help = {
    name: "anime",
    usage: `ani`,
    information: "anime"
  }