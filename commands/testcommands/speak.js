const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix) => {

    if(!message.member.permissions.has('ADMINISTRATOR')){
        return message.reply({ content: 'You do not have the `ADMINISTRATION` permission.' })
    }

    const text = args.join(" ")
    if(!text){return message.channel.send({ content: 'You must enter text to run this command!' })}

    message.delete()

    const embed = new Discord.MessageEmbed()
        .setDescription(text)
        .setColor('AQUA')
    message.channel.send({ content: text })

}

module.exports.help = {
    name: 'speak',
    aliases: []
}