const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete();
  
  const moment = require('moment');
        moment.locale('pt-BR');

    
        let statusembed = new Discord.RichEmbed()
        .addField('<:parceiro:559768844076449792> Parceiros <:parceiro:559768844076449792>', `<:parceiro:559768844076449792> Toca do Bear  \n  [Entrar](https://discord.gg/VDNyCTA) \n <:parceiro:559768844076449792> REWARDS GIF (4 INVITES)  \n [Entrar](https://discord.gg/kmGNm8M) \n <:parceiro:559768844076449792> Rede-StrickeMc \n  [Entrar](https://discord.gg/JGxXZm) \n <:parceiro:559768844076449792> Moderador Guide \n [Entrar](https://discord.gg/6TG2mzx) \n <:parceiro:559768844076449792> Trinity Hosting  \n [Entra](https://discord.gg/r3gNETE)  `)
        .setDescription(`Com a ajuda dos parceiros: Servidores(${client.guilds.size})Membros:(${client.users.size}):`)
        .setImage("https://cdn.discordapp.com/attachments/559231004825485361/559781112528764958/Site-Parceiros.png")
        .setColor('#AE05BB')        
        message.channel.send(statusembed);
}