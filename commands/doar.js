const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete();
  
  const moment = require('moment');
        moment.locale('pt-BR');

    
        let doarembed = new Discord.RichEmbed()
        .addField('Informações', `Opa ${message.author} Caso você queira doar para ajudar a nika`)
        .addField('<a:cursor:556681014479552512>Temos doações de varios preços', `[R$5](https://www.mercadopago.com/mlb/checkout/start?pref_id=285725696-19d7f3a1-872f-4811-9eb6-1903e14fdf96) \n \n [R$10](https://www.mercadopago.com/mlb/checkout/start?pref_id=285725696-65feadbb-de50-461d-9c36-1bbe5fbd0dde)`)
        .setImage('https://cdn.discordapp.com/attachments/564539423920881665/564540982444556398/6e06fb816406ae7d0df9e92c069df2936f8c8acc548c04b13107acb2b7e1c1d5.png')
        .setColor('#AE05BB')        
        message.channel.send(`${message.author}`)
        message.channel.send(doarembed);
    }