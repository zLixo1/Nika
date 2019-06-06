const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send({embed: {description: "``Você não tem permissão para este comando.``", color: 0x00F40101}})

    message.delete()
    message.channel.send(`Lista De ID De Emojis: \n\n`  + message.guild.emojis.map(e => `${e.name} - ${e.id}`).join('\n'))

}

module.exports.help = {
    name: 'teste'
}