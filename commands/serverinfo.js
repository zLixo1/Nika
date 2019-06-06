const Discord = require("discord.js");
const moment = require("moment")
moment.locale("pt-BR")

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
        let online = message.guild.members.filter(a => a.presence.status == "online").size;
        let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
        let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
        let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
        let outracoisa = message.guild.members.filter(a => a.user.outracoisa).size;
        let totalmembros = message.guild.memberCount;
        let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
        let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
            const embed = new Discord.RichEmbed()
            .setTitle(`Informações do servidor: ${message.guild.name}`)
            .setColor("#AE05BB")
            .addField('👑 Dono:', `<@${message.guild.owner.id}>`, true)
            .addField('📆 Criado em:', moment(message.guild.createdAt).format('LLLL'), true)
            .addField('📆 Entrou aqui em:', moment(message.member.joinedAt).format('LLLL'), true)
            .addField(`:busts_in_silhouette: | Membros: (${totalmembros})`, ` <:online2:556683591682228224> Onlines: ${online}\n <:idle2:556683656253538324> Ausentes: ${ausente}\n  <:dnd2:556683837283893248> Ocupados: ${ocupado}\n  <:offline2:556683727929868289> Offline: ${offline}`)                                                     
            .addField(`:speaking_head: | Canais: (${canaistexto+canaisvoz})`, `Texto: ${canaistexto}\nVoz: ${canaisvoz}\n`, true)
            .setThumbnail(message.guild.iconURL)
            .setFooter(`${message.author.tag}`, message.author.avatarURL)
            message.channel.send(embed) 
}

module.exports.help = {
    name: "serverinfo"
}
