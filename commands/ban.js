const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var canal = message.guild.channels.find('name', '');
    if (message.author.id !== "316177689436356610") 
    if(!message.guild.member(message.author.id).hasPermissions("BAN_MEMBERS")) return message.reply("Você não tem permissão para executar este comando.");  
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("**:x:** | Mencione quem você quer banir.");
    if(!member.bannable) 
      return message.reply("Não tenho permissões para punir este membro, desculpa.");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Não informado.";
    await member.ban(reason)
      .catch(error => message.reply(`Foi mal ${message.author}, ocorreu o seguinte erro ao tentar realizar o comando: ${error}`));
  let embed = new Discord.RichEmbed()
  .setColor('#AE05BB')
  .setThumbnail(message.author.avatarURL)
  .setTitle(`**:x:** | Punições `)
  .setDescription(`Quem baniu: ${message.author} \n\n Usuário banido: ${member.user} \n\n Motivo: ${reason}`)
  .setFooter(`Banido por: ${message.author.username}`)
  .setTimestamp()
  canal.send(embed);
}

module.exports.help = {
    name: "ban"
}
