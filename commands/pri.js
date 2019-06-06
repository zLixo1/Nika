const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (message.author.id !== "422249636070293504") return message.reply(":x: APENAS ")
            message.delete('')
              let reason = args.slice(0).join(' ');
          if (reason.length < 1) return message.reply('Use /anunciarall (Oque deseja anunciar!)');
          message.channel.send(`estou enviando sua mensagem pra (${client.users.size})`)
              var embed = new Discord.RichEmbed()
                .setAuthor(` Anuncio | Universal `, "https://giphy.com/gifs/TraficoZMG-traficozmg-aviso-l0Iy2xE6qvWxClVHq")
                .setDescription(args.join(" "))
                .setColor("#AE05BB")
                .setThumbnail('https://giphy.com/gifs/TraficoZMG-traficozmg-aviso-l0Iy2xE6qvWxClVHq ')
                .setFooter('Anunciado por: ' + message.author.tag)
                .setThumbnail(message.guild.iconURL)
                
                 client.users.forEach(member => {
                 member.send(embed)
                })
              }