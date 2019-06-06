const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    var msg = args.slice(0).join(' ');

    if (!msg) {
        let embed = new Discord.RichEmbed()
            .setColor("#FF1493")
            .setDescription("<a:texto:566790850223538178> **" + message.author.username + "** escreva um texto para aparecer no seu ``perfil``.");
        return message.channel.send(embed);
    }
    
    if (msg.length > 100) return message.channel.send("<:DatabaseError:569611879316455455> **|** **" + message.author.username + "** o máximo de caracteres é 1000!");

        let c = new Discord.RichEmbed()
            .setColor("#FF1493")
            .setDescription("<a:texto:566790850223538178> Mensagem setada com sucesso!")
            .addField("<:textos:569612060321906698> **Mensagem:**", msg);
        message.channel.send(c);
        db.set(`perfil-msg_${message.author.id}`, `${msg}`);
};
