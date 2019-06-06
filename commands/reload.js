exports.run = async (h ,message, args) => { 
    var msg = message.content.split(' ');
    if(!message.member.hasPermission("ADMINISTRATOR")) return ('Você não possui permissão!!')
    if (msg.length < 2) return message.reply('Escreva o comando que deseja reiniciar.');
  
    try {
      delete require.cache[require.resolve(`./${msg[1]}.js`)];
    }catch(e){
      return message.reply('comando não encontrando!');
    }
    message.reply('🎐 Comando reiniciado: ``' + msg[1] + '``');
  }

exports.help = {
    name: "reload"
}