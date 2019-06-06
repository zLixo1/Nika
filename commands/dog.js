const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

  message.delete()
  var randomPuppy = require("random-puppy")
randomPuppy('dog') //NÃO MUDAR ISSO
.then(url => {
  var pornnEmbed = new Discord.RichEmbed()
      .setTitle('Aqui seu cachorrinho')
      .setImage(url)
      .setColor('#000001')
  message.channel.send(pornnEmbed);
});
}

 module.exports.help = {
    name: "dog",
    usage: `doginho`,
    information: "cachorros"
  }