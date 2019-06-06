exports.run = (client, message, args) => {
    let muteRole = message.guild.roles.find("name", "Muted");
    let member = message.mentions.members.first();
    if(!member) return message.channel.send(`Quem você quer desmutar?`);
     else{
     member.removeRole(muteRole);
     message.channel.send(`${member} foi desmutado por ${message.author}`);
    }
}