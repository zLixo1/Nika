const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

  message.delete()
  var randomPuppy = require("random-puppy")
randomPuppy('cat') //NÃO MUDAR ISSO
.then(url => {
  var pornnEmbed = new Discord.RichEmbed()
      .setTitle('aqui seu gatinho')
      .setImage(url)
      .setColor('#000001')
  message.channel.send(pornnEmbed);
});
}

 module.exports.help = {
    name: "cat",
    usage: `gato`,
    information: "gatinhos"
  }