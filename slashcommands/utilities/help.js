const Discord = require('discord.js');

module.exports.run = async (client, inter) => {

    const option = inter.options.getString('category');

    if(option === 'tickets'){
        const ticketEmbed = new Discord.MessageEmbed()
           .setTitle('**Ticket Commands**')
           .setDescription(`\`/new\` - Open an ticket 
           \`/close\` - close an ticket.
           \`/add user\` - Add an user to an ticket. 
           \`/remove user\` - Remove an user to an ticket. 
           \`/rename new-name\` - Change ticket name.`)
        await inter.reply({ embeds: [ticketEmbed] })
    }
    if(option === 'moderation'){
        const moderatieEmbed = new Discord.MessageEmbed()
           .setTitle('**Ticket Commands**')
           .setDescription(`\`/ban user\` - Ban an user. 
           \`/kick user\` - Kick an user.
           \`/clear\` - Delete messages.`)
        await inter.reply({ embeds: [moderatieEmbed] })  
    }

}

module.exports.help = { 
    name: 'help'
}