const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix) => {

    const bot = client.user.username

    const testEmbed = new Discord.MessageEmbed()
        .setDescription(`This is a test embed`)
        .setColor('#0099ff')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
        .setFooter(`${bot} - Discord Bot`)
    message.channel.send({ embeds: [testEmbed] })

}

module.exports.help = {
    name: 'ping',
    aliases: []
}