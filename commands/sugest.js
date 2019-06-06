const Discord = require("discord.js");
    module.exports.run = async (bot, message, args) => {
    let denyPerms = ["SEND_MESSAGES"];
    let allowPerms = ["ADD_REACTIONS"]; 
    let channel = message.guild.channels.find(c => c.name === 'sugestões');
    try {//abrindo o try
        if (!channel) {//verificando se o canal sugestões existe, se o canal não existir ele cria um.
          channel = await message.guild.createChannel('sugestões', 'text', [{//criando o canal sugestões
          id: message.guild.id,
          deny: denyPerms,
          allow: allowPerms 
      }])
          await message.channel.send(`${message.author}, não encontrei o canal sugestões, então criei o canal automaticamente.`);
        }
      let sMsg = args.join(' ');
        if (!sMsg) {
        return message.channel.send("Por favor, insira sua sugestão!")
     } 
      let embed = new Discord.RichEmbed()
        .addField("**Sugestão**", `${sMsg}`)
        .setFooter(`Sugestão enviada por: ${message.author.tag}`, message.author.displayAvatarURL)
        .setTimestamp(new(Date))
        .setColor("#07ed66")
        .setThumbnail(message.author.avatarURL)
      let msg = await channel.send(embed);
        await msg.react(":white_check_mark: ");//troque o emoji se não vai dar erro.
        await msg.react("negative_squared_cross_mark: ");//troque o emoji se não vai dar erro.
        await message.channel.send('Sua sugestao foi enviada com sucesso.');   
} catch(error) {//fechando o try e abrindo um catch para informar se houver algum erro.
    console.log(error);
    } //Fechando o catch. Comando feito por Lukinhas#6744, qualquer duvida so me chamar no DM.
}