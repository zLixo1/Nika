const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Infelizmente Você não pode executar esse comando")
  if(!rUser) return message.channel.send(":x: | Não consegui achar o usuário no banco de dados.");
  let rreason = args.join(" ").slice(22);

  let parceirosEmbed = new Discord.RichEmbed()
  .setDescription("Novo parceiro")
  .setColor("0x36393e")
  .addField("dono do servidor", `${rUser} `)
  .addField("Fechado por", `${message.author} `)
  .addField("Link do discord", rreason)
  .setImage("https://cdn.discordapp.com/attachments/559231004825485361/559781112528764958/Site-Parceiros.png");



  let parceiroschannel = message.guild.channels.find(`name`, "「🛑」parcerias");
  if(!parceiroschannel) return message.channel.send(":x: | Não consegui achar o chat `「🛑」parcerias`.");


  message.delete().catch(O_o=>{});
  parceiroschannel.send(parceirosEmbed);
}

module.exports.help = {
  name: "setarparceiro"
}