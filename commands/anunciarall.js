const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
	    if (message.author.id !== "316177689436356610") 
    if(!message.member.hasPermissions("ADMINISTRATOR")) return message.reply("❌ Você não tem permissão! seu cachorro não tente!")
            message.delete('')
              let reason = args.slice(0).join(' ');
          if (reason.length < 1) return message.reply('Use /anunciarall (Oque deseja anunciar!)');
          message.channel.send(':white_check_mark: Anunciado com sucesso!')
              var embed = new Discord.RichEmbed()
                .setAuthor(` Nika | Anuncios`, "https://giphy.com/gifs/TraficoZMG-traficozmg-aviso-l0Iy2xE6qvWxClVHq")
                .setDescription(args.join(" "))
                .setColor("#AE05BB")
                .setThumbnail('https://giphy.com/gifs/TraficoZMG-traficozmg-aviso-l0Iy2xE6qvWxClVHq ')
                .setFooter('Anunciado por: ' + message.author.tag,message.author.avatarURL)
                .setThumbnail(message.guild.iconURL)
               message.guild.members.map(users=>users.send(embed));
      };
    
      module.exports.help = {
        name: "anunciarall",
        usage: ``,
        information: ""
      }