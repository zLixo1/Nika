exports.run = (client, message, args) => {
    async function getEval(message, args) {
        if (message.content.includes("token")) return message.reply("**mama eu sua puta**");
        let code = args.join(' ');
      
        try {
            let evaled = await eval(code);
      
            if (evaled === null) evaled = 'null';
            if (evaled === undefined) evaled = 'undefined';
      
            var msg12 = `**Código:**\n\`\`\`js\n${code}\`\`\`\n**Resultado:**\n\`\`\`LDIF\n${evaled}\`\`\``
      
            message.channel.send(msg12.replace(/`${process.env.token}`/g, `Por que tu quer saber? sem mãe do karai`))
      
        } catch (err) {
            message.channel.send(`**Código:**\n\`\`\`js\n${code}\`\`\`\n**Erro:**\n\`\`\`LDIF\n${err}\`\`\``)
        }
      
      
      }
        if (message.author.id === "316177689436356610" || message.author.id == '309482128398221313' || message.author.id == "442862026679779329") {
            getEval(message, args);
        } else {
            message.channel.send(`Opa ${message.author.username}, você não tem permissão para usar este comando!`)
        }
    }