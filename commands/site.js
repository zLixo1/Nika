const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete();
  
  const moment = require('moment');
        moment.locale('pt-BR');

    
        let statusembed = new Discord.RichEmbed()
        .addField('Criador', `<:owner:556682207532679189> кคuคห 🖤 ƒσuหdεя ł¡gнт`)
        .addField('<a:cursor:556681014479552512> Site', `[SITE](https://collegiate-diaphrag.000webhostapp.com/NikaSITE/index.html)`)
        .setImage('https://cdn.discordapp.com/emojis/551490822818758657.gifv=1')
        .setColor('#AE05BB')        
        message.channel.send(statusembed);
}