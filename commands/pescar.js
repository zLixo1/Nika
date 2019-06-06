const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let randompesca = [":mans_shoe: Sapato", ":fishing_pole_and_fish: Peixe", ":tropical_fish: Peixe Dourado", ":blowfish: Baiacu", " Nada", ":eyeglasses: Óculos velho", ":herb: Folha", ":moneybag: Dinheiro", " Nada", " Nada", " Nada", " Nada", " Nada"];
    let resultado = Math.floor((Math.random() * randompesca.length));
        embed = new Discord.RichEmbed()
        .setColor("#AE05BB")
        .setImage("https://media1.tenor.com/images/cacb0865c8539a29c19f3ecce0fdc448/tenor.gif")
        .setDescription("\n⠀⠀⠀⠀⠀\n  Você pescou um **" + randompesca[resultado] + "**\n⠀⠀⠀⠀⠀\n"); 
        message.channel.send(embed)

}
module.exports.help = {
    name: "pescar"
}