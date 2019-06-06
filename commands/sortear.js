const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

  if(!message.member.hasPermissions("ADMINISTRATOR")) return message.reply(":x: Você não tem permissão de usar esse comando")
    let reason = args.slice(0).join(' ');
    var razao = args.slice(1).join(" ");
      if (reason.length < 1) return message.channel.send('``' + `${message.author.username}` + '``' + ', oque você quer sortear? Use ``/sortear (oque quer sortear)``!');


      message.delete('')
      message.channel.send('Qual o tempo, em minutos?')

      .then(function(){
        message.channel.awaitMessages(response => message.content, {
          max: 1,
          time: 30000,
          errors: ['time'],
        })
        .then((collected) => {
          message.channel.bulkDelete('3')
          let mem = message.guild.members.random().user
          message.channel.send('@everyone')
                  var embed = new Discord.RichEmbed()
                    .setTitle('<a:festaILS:559234073554321418> Sorteio <a:festaILS:559234073554321418>')
                    .setDescription('Sorteio iniciado, espere ' + `${collected.first().content}` + ' minutos para o resultado! \n\n **Sorteio de um: '+ `${args[0]}**`)
                    .setColor("0x36393e")
                    .setThumbnail(message.guild.iconURL)
              message.channel.send(embed) 
              setTimeout(() => {
                message.channel.bulkDelete('3')
                message.channel.send('@everyone')
                var embed2 = new Discord.RichEmbed()
                .setTitle('<a:festaILS:559234073554321418> Sorteio <a:festaILS:559234073554321418>')
                .setDescription(`O ganhador do "${args[0]}" foi o: \n\n  **` + mem.tag + '**')
                .setColor("0x36393e")
                .setThumbnail(message.guild.iconURL)
                   message.channel.send(embed2) 
            }, (60000*collected.first().content));
          })
          .catch(function(){
            message.channel.send('Você demorou responder!');
          });
      });
  }


  module.exports.help = {
    name: "sortear",
    usage: ``,
    information: ""
  }