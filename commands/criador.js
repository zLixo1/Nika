const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setAuthor('Aqui está:', "")
    .setColor('RANDOM')
    .addField("Opa" `teste  `)
    .setFooter(`Comando enviado por: ${message.author.username}`, "https://media.giphy.com/media/xwmX2VqO7On8k/giphy.gif");
message.channel.send(botembed);
return;
}

module.exports.help = {
    name: "criador"
}