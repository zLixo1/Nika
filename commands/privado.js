Discord = require("Discord.js");
   
 
     
module.exports.run = async (bot, message, args) => {


let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if (!dUser) return message.channel.send("Por favor mencione alguem para enviar a mensagem!")
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Infelizmente Você não pode executar esse comando")
let dMessage = args.join(" ").slice(22);
if(dMessage.length < 1) return message.reply('Nenhuma mensagem foi Encontrada!')

dUser.send(`${dUser} **>>** ${dMessage}`)

message.author.send(`${message.author} Você enviou uma mensagem para  ${dUser} ✅`)

function checkBots(guild) {
  let botCount = 0; // This is value that we will return
  guild.members.forEach(member => {
    if(member.user.bot) botCount++;
  });
  return botCount;
 }
}
exports.help = {
name: "privado"
}