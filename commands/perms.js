const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    message.delete().catch(O_o=>{});

    let user = message.mentions.members.first() || message.member;
    let string = ''
    message.channel.permissionsFor(user).toArray().map(p => string += `${p.charAt(0) + p.toLowerCase().replace(/_/g, ' ').slice(1).replace(`vad`, `VAD`)}, `)
    let finalStr = string 
    let embed = new Discord.RichEmbed()
    .setDescription(`Permissões de **${message.author.username}**`)
    .addField(`Lista de permissões:`, `\`\`\`js\n${finalStr}\`\`\``)
    .setColor('#AE05BB')
    .setTimestamp(new Date())
    .setFooter(message.author.tag, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    message.channel.send(embed);
    }

module.exports.help = {
    name: "perms"
    }