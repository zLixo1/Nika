const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let imagemessage = args[0]
    if (!imagemessage) {
         return message.reply({embed : {
             color:     15144448,
             description: `**✋🏻 Por favor, coloque um link de uma imagem!**`
          }
         }
         )
     }

     let testemessage = args.slice(1).join(" ")
    if (!testemessage) {
         return message.reply({embed : {
             color:     15144448,
             description: `**✋🏻 Por favor, coloque uma mensagem!**`
          }
         }
         )
     }

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const embed = new Discord.RichEmbed() 
    .setAuthor('Votação Executada:', "https://cdn.discordapp.com/attachments/467178630666256398/471106934259318784/success.gif")
    .setDescription(`**Mensagem:** ${testemessage}`)
    .setColor('#AE05BB')
    .setImage(imagemessage)
    .setTimestamp()
    .setFooter(`Por: ${message.author.username}`, message.author.avatarURL); 
        message.delete().catch();
        message.channel.send("@everyone")
        message.channel.send({
        embed
    }).then(msg => {
        msg.react("👍").then(r => msg.react("👎"))
    });


}