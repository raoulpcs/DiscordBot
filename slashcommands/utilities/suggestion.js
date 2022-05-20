const Discord = require('discord.js');

module.exports.run = async (client, inter) => {
    
    const channel = client.channels.cache.find(c => c.id === "965832916972236840")
    if(channel === undefined) return
    
    const suggest = inter.options.getString('your-idea');

    const embed = new Discord.MessageEmbed()
    .setDescription(`If you also want to create a suggestion, use: \`/suggest\`!`)
    .setAuthor(`| ${inter.user.username}`, inter.user.displayAvatarURL({ dynamic: true }))
    .addField(`Submitted by:`, `${inter.user}`)
    .setColor('RANDOM')
    .addField(`Submitted Suggestion:`, suggest)
    channel.send({ embeds: [embed] })

    const replied = new Discord.MessageEmbed()
    .setDescription(`Your suggest is successful sended to: ${channel}!`)

    await inter.reply({ embeds: [replied] })

}

module.exports.help = {
    name: 'suggest'
}