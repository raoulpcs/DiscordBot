const Discord = require('discord.js');
const { Permissions } = require('discord.js'); 
const db = require('quick.db');

module.exports.run = async (client, inter) => {

    if(db.get(`ticket_${inter.user.id}`) === true){
        return await inter.reply(`You can't create a ticket because you already have one open!`)
    }
    
    const everyoneRole = inter.guild.roles.cache.find(x => x.name === "@everyone").id;
    inter.guild.channels.create(`ticket-${inter.user.username}`, { type: 'text', 
    permissionOverwrites: [
        {
            id: everyoneRole,
            deny: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES]
        },
        {
            id: inter.user.id,
            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES]
        }
    ], }).then(async c => {

        const openEmbed = new Discord.MessageEmbed()
            .setDescription(`Your ticket is successful created! ${c}`)
        await inter.reply({ embeds: [openEmbed] })

        const thanksEmbed = new Discord.MessageEmbed()
            .setDescription(`Thank you for creating a ticket!\nOur team will help you as soon as possible!`)
        c.send({ content: `<@!${inter.user.id}>`, embeds: [thanksEmbed] })

        db.set(`ticket_${inter.user.id}`, true)
        db.set(`ticketChannel_${c.id}`, true)

    })
    
}

module.exports.help = {
    name: 'new'
}