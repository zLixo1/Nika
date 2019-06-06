const Discord = require("discord.js");
const author = new Discord.Client();

exports.run = (bot,message,args) => {
    let creator = 'Voxy';
            const embed = new Discord.RichEmbed()



            .setAuthor("Nika", "")
            .setTitle("Aqui esta")
            .setDescription("Click no emoji: 🔧 Para ir a central de comandos")
            .addField('**Caso tenha duvidas entre em nosso suporte**', `**[Suporte](https://discord.gg/MrZJn4T)**`)
            .addField('**Caso queira por o bot em seu discord**', `**[Convite](https://discordapp.com/oauth2/authorize?client_id=584759751036895232&scope=bot&permissions=8)**`)
            .setColor('#AE05BB')
            .setTimestamp()
            .setFooter('Nika Comandos', message.author.avatarURL)
            message.delete();
           

            message.channel.send({embed}).then( msg => {
        
            msg.react('🔧').then( r => {
                msg.react('⭐')
                msg.react('569612780144033794')
                msg.react('🔊')
                msg.react('559226334199414794')

                
            
                const menu = (reaction, user) => reaction.emoji.name === '🔧' && user.id === message.author.id;
                const normais = (reaction, user) => reaction.emoji.id === '569612780144033794' && user.id === message.author.id;
                const staffers = (reaction, user) => reaction.emoji.id === '559226334199414794' && user.id === message.author.id;
                const musica = (reaction, user) => reaction.emoji.name === '🔊' && user.id === message.author.id;
                const infor = (reaction, user) => reaction.emoji.name === '⭐' && user.id === message.author.id;
                

                const n = msg.createReactionCollector(normais, {time: 60000});

                const s = msg.createReactionCollector(staffers, {time: 60000});

                const i = msg.createReactionCollector(infor, {time: 60000})

                const u = msg.createReactionCollector(musica, {time: 60000})

                const m = msg.createReactionCollector(menu, {time: 60000})


                m.on('collect', r => {
                    embed.setDescription("Comandos membros: <:outage:556685322227023904> \n Comandos Staff's: <:owner:556682207532679189> \n Comandos musicais: 🔊 \n Informações: ⭐ ")
                embed.setTimestamp()
                embed.setColor('#AE05BB')
                embed.setFooter('Nika Comandos', message.author.avatarURL)
                       msg.edit(embed)
                })

                u.on('collect', r => {
                    embed.setDescription("Comando abaixo \n\n Categoria __MUSICA__ \n \n \n • REMOVIDO !!!!!")
                    embed.setTimestamp()
                    embed.setColor("#AE05BB")
                    embed.setFooter('Nika Comandos', message.author.avatarURL)
                          msg.edit(embed)
                })

                n.on('collect', r => {
                        embed.setDescription("Comandos abaixo \n\nCategoria __MEMBROS__ \n  • /idemojis \n • /cat \n • /dog \n• /total  \n • /ascii  \n  • /beijar  \n  • /ping \n • /emojis \n  • /serverinfo  \n  • /falar  \n  • /casar  \n  • /soco  \n • /sugestao  \n   • /ontime  \n  • /convite  \n\n")
            embed.setTimestamp()
            embed.setColor('#AE05BB')
            embed.setFooter('Nika Comandos', message.author.avatarURL)
                    msg.edit(embed)
                })

                s.on('collect', r => {
                       embed.setDescription("Comandos abaixo \n\n **Página 02**\nCategoria __MODERAÇÃO__ \n\n  • /ban   \n • /limpar  \n • /anunciar \n  • /anunciarall \n • /vote  \n • /sortear \n\n")
            embed.setTimestamp()
            embed.setColor('#AE05BB')
            embed.setFooter('Nika Comandos', message.author.avatarURL)
                    msg.edit(embed)
                })

                i.on('collect', r => {
                    embed.setDescription(`Informação em baixo \n\n Bot em Beta \n Futuramente com Database \n Criado por \n ${creator}  `)
                    embed.setTimestamp()
                    embed.setColor('#AE05BB')
                    embed.setFooter('Nika Comandos')
                    msg.edit(embed)
                })

            });

        });
    }

    exports.help = {
        name: "ajuda"

    }