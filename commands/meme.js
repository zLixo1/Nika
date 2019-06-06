const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

  message.delete()
  var randomPuppy = require("random-puppy")
randomPuppy('meme') //NÃO MUDAR ISSO
.then(url => {
  var pornnEmbed = new Discord.RichEmbed()
      .setTitle('Meme')
      .setImage(url)
      .setColor('#000001')
  message.channel.send(pornnEmbed);
});
}

 module.exports.help = {
    name: "meme",
    usage: `ani`,
    information: "anime"
  }                 