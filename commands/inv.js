const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete();
  
  const moment = require('moment');
        moment.locale('pt-BR');

    
        let statusembed = new Discord.RichEmbed()
        .addField('Aqui senhor meu invite:', `Está ai:`)
        .addField('Invite aqui', `https://discordapp.com/oauth2/authorize?=&client_id=556841526655844362&scope=bot&permissions=8`)
        .setColor('#AE05BB')        
        message.channel.send(statusembed);
}