const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (client, message) => {

try {

  let user = message.mentions.users.first() || message.author;

  let msg = await db.fetch(`perfil-msg_${user.id}`);
  if (msg === null) msg = "Sem mensagem definida, use ``/setmsg``.";

  var amigo = await db.fetch(`staff_friend`);
  var vip = await db.fetch(`staff_vip`);
  var parceiro = await db.fetch(`staff_parceiro`);
  var staff = await db.fetch(`staff_staff`);
  var dev = await db.fetch(`staff_dev`);
  var dono = await db.fetch(`staff_dono`);

  let dinheiro = await db.fetch(`userBalance_${user.id}`);
  let ouro = await db.fetch(`userOuro_${user.id}`);
  let ferro = await db.fetch(`userFerro_${user.id}`);
  let prata = await db.fetch(`userPrata_${user.id}`);

  var amigoemoji = "";
  var vipemoji = "";
  var parceiroemoji = "";
  var staffemoji = "";
  var devemoji = "";
  var donoemoji = "";

  if (dinheiro == null) BREVE = 0;
  if (ouro === null) BREVE = 0;
  if (ferro === null) BREVE = 0;
  if (prata === null) BREVE = 0;

if (amigo !== null) 
if (amigo.includes(user.id)) amigoemoji = '<:friend:569612278400548865>';

if (vip !== null)
if (vip.includes(user.id)) vipemoji = '<:VIP:569612605111664687>';

if (parceiro !== null) 
if (parceiro.includes(user.id)) parceiroemoji = '<:parceiro:559768844076449792>';

if (staff !== null) 
if (staff.includes(user.id)) staffemoji = '<:staff:569612780144033794>';

if (dev !== null) 
if (dev.includes(user.id)) devemoji = '<:Desenvolvedor:569612913153671328>';

if (dono !== null) 
if (dono.includes(user.id)) donoemoji = '<:policeofficeremoji:569613158512197663>';

let userinfoembed = new Discord.RichEmbed()
  .setDescription(`<:manualsobrevivente:569613295997419530> **Perfil:** ${user.username}`)
  .addField(`**Especiais**`, `<:joinha:561312443951874060> ${amigoemoji} ${vipemoji} ${parceiroemoji} ${staffemoji} ${devemoji} ${donoemoji}`, true)
  .addField(`<:joinha:561312443951874060> **ID do Usuário:**`, "```" + user.id + "```", true)
  .addBlankField()
  .addField(`<:joinha:561312443951874060> **Sobre mim:**`, `${msg}`)
  .setColor("#FF1493");
  message.channel.send(userinfoembed);

  } catch (e){
    console.log(`Erro: ${e}`);
  }

};