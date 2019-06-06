const Discord = require("discord.js");

    exports.run = (client, message, args) => {
    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.mentions.channels.first();

    if (!suggestchannel) {
        return message.reply("Porfavor, mencione algum canal!")
    }

    if (!suggestmessage) {
        return message.reply("Porfavor, insira sua sugestão!")
    }

    let embed = new Discord.RichEmbed()
        .setAuthor('Sugestão', "https://discordemoji.com/assets/emoji/rainbowpartner.gif")
        .addField("**Sugestão**", `${suggestmessage}`)
        .setColor("#AE05BB")
        .setFooter(`Sugestão dada por: ${message.author.tag}`)
        .setTimestamp()
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react("✅").then(r => msg.react("❎"))
    });


    message.reply(`Sua sugestão foi enviada com sucesso!`)
    return;
}