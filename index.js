const Discord = require('discord.js');
const download = require('download-file')
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');


client.login(config.token)


let status = [
  {name: 'Musica removida', type: 'STREAMING', url: 'https://twitch.tv/BuyBOT'},
  {name: 'Nika Beta', type: 'STREAMING', url: 'https://twitch.tv/BuyBOT'},
   //{name: 'msg4', type: 'STREAMING', url: 'https://twitch.tv/izael61'}, 
 
];

//STREAMING = TRANSMITINDO
//LISTENING = OUVINDO
//PLAYING = JOGANDO
//WATCHING = ASSISTINDO


client.on('message', async message => { // message => {} é o mesmo que function(message) {}
  // Um unico evento message é suficiente pro bot, um unico evento de cada tipo é o ideal
	if (message.content === 'Nika') return message.reply("Fala ae meu consagrado")
  if (message.content === 'Vadia') return message.reply('vadia é sua mãe <:Natsu2:559225651597410328> ')
  if (message.content === 'Fumar') return message.reply('aqui seu fumante: 🚬 💨💨💨')
  if (message.content === 'vadia') return message.reply('vadia é sua mãe <:Natsu2:559225651597410328> ')
  if (message.content === 'usuarios') return message.reply(`${client.users.size}`)
  
  if (message.isMentioned(client.user)) {
    let infob = new Discord.RichEmbed()
      .setTitle('Informação da Nika')
      .setDescription(`Meu prefix \`/\` \n Fui desenvolvida pelo <@316177689436356610> \n VOLTAMOS LINDOS`)
      .addField('Nika', `Nika é um bot Muito bom e no futuro ela terar muitas coisas novas`)
      .addField('Site da nika', `[SITE](https://collegiate-diaphrag.000webhostapp.com/site/index.html)`)
      .setColor('#AE05BB')
  message.channel.send(infob);
  }
  
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  
  let args = message.content.split(" ").slice(1);
  // The list of if/else is replaced with those simple 2 lines:
  
  try {
    let commandsFile = require(`./commands/${command}.js`);
    commandsFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});


client.on('ready', () => {
  console.log('Status carregado!');
  console.log("bot iniciado")

  function setStatus() {
      let randomStatus = status[Math.floor(Math.random() * status.length)];
      client.user.setPresence({game: randomStatus});
  }

  // setStatus(); Nao precisa chamar a funçao aqui
  setInterval(() => setStatus(), 5000); //{1000/1s}\{10000/10s}\{100000/1m}
  
});


    //"token" : "NTU2ODQxNTI2NjU1ODQ0MzYy.D2_mzQ.SM-sMDO6IxbKCkzxTar9ObEn7_4",
    //"prefix" : "/"
 
client.login(process.env.TOKEN)