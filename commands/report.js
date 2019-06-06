const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send(":x: | Não consegui achar o usuário no banco de dados.");
  let rreason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("0x36393e")
  .addField("Usuário reportado", `${rUser} ID: ${rUser.id}`)
  .addField("Reportado por", `${message.author} ID: ${message.author.id}`)
  .addField("Canal", message.channel)
  .addField("Motivo/Prova", rreason);

  let reportschannel = message.guild.channels.find(`name`, "★彡comandos-staff");
  if(!reportschannel) return message.channel.send(":x: | Não consegui achar o chat `📄-ʀᴇᴘᴏʀᴛ `.");


  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);
}

module.exports.help = {
  name: "report"
}