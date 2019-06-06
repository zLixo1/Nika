const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.delete().catch(O_o=>{});
let bicon = client.user.displayAvatarURL;
    let string = '';
    client.guilds.forEach(guild => {
    string += guild.name + '\n';})
    let bt = client.user.username;
    let botembed = new Discord.RichEmbed()
        .setColor("#AE05BB")
        .addField("<:servidores:560156374751772683> **Servidores:** <:servidores:560156374751772683>", string)
        .setDescription(` Estamos em (${client.guilds.size})Servidores e com (${client.users.size})Membros:\n`)
        .setTimestamp()
        .setFooter("Comando Requisitado por: " + message.author.username, message.author.avatarURL);
    message.channel.send(botembed);
}

module.exports.help = {
    name: "servidores"
    }