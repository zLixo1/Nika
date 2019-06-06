exports.run = (client, message, args)  => {

    let reason = args.slice(0).join(' ');

      if (reason.length < 1) return message.channel.send('**' + message.author.tag + "** :rage: Diga uma **mensagem** !");

    message.channel.sendMessage(`:pencil2: Palavra reversa por : **${message.author.username}** \n \n **` + args.join(' ').split('').reverse().join('') + '**');

}