const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "371445399220781069") 
if(!message.guild.member(message.author.id).hasPermissions("BAN_MEMBERS")) return message.reply("Você não tem permissão para executar este comando.");
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply("Por favor, coloque um número entre 2 e 100 para apagar o número de mensagens.");
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`Não foi possível deletar as mensagens selecionadas por causa do: ${error}`));
    message.channel.send(`Sucesso, você apagou ${deleteCount} mensagens. E deixou o chat mais limpo :D`);
    
    message.channel.send(embed);
}


module.exports.help = {
    name: "limpar"
} 

    