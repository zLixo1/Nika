const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {
        try {
  let user;
   message.delete().catch(O_o=>{});
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();

    } else if(args[0]) {
        user = client.users.get(args[0]);

    }
  let botmessage = args.slice(1).join(' ')

  if (args[0] == null) {return message.channel.send(` :x: | ${message.author} **Mencione um usuário !**`)}


    if (args[1] == null) {return message.channel.send(` :x: | ${message.author} **Diga algo !**`)}
    message.delete().catch(O_o=>{});
    message.channel.createWebhook(user.username, user.avatarURL).then(w => {
        w.send(botmessage);
        w.delete();
    })

} catch (err) {
    message.reply(':x: **Eu não tenho permissão para criar um Webhook neste servidor, ou não encontrei este usuário.**')
   }

}

module.exports.help = {
  name: "fakemsg"
}