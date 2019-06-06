const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (message.author.id !== "316177689436356610") return message.reply(":x: Você não tem permissão! seu cachorro não tente!")
            message.delete('')
              let reason = args.slice(0).join(' ');
          if (reason.length < 1) return message.reply('Use /universal (Oque deseja anunciar!)');
          message.channel.send(`estou enviando sua mensagem pra (${client.users.size})`)

                 client.users.forEach(member => {
                 member.send(reason)
                })
              }