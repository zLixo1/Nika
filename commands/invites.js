const Discord = require("discord.js");

module.exports.run = async (client, message) => {
    if(message.channel.type === 'dm') return;
    var user = message.mentions.users.first();

    if (!user) user = message.author;

    var targetInvites = await message.guild.fetchInvites();

    var invitesUses = 0;

    targetInvites.forEach(invite => {
        if (invite.inviter.id === user.id) {
            invitesUses += invite.uses;
        }
    });

    var embed = new Discord.RichEmbed()
    .setThumbnail(user.displayAvatarURL)
    .addField("**• Aqui seus invites •**", `\n Você tem (**\`${invitesUses}\`**) - Invites`)
    .setColor("#AE05BB")
    .setFooter(`${user.tag}`)
    .setTimestamp();

    message.channel.send(embed);
};

module.exports.config = {
    name: "invites"
};