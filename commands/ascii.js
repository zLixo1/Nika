const ascii = require('ascii-art');

module.exports.run = async (bot, message, args) => {

    if (!args.join(' ')) return message.reply('por favor especifique textos para a conversão ascii');

    ascii.font(args.join(' '), 'Doom', async txt => {
        message.channel.send(txt, {
            code: 'md'
        });
    });

};

module.exports.help = {
    name: 'ascii',
}