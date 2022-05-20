const Discord = require('discord.js');
const { Permissions } = require('discord.js'); 
const db = require('quick.db');

module.exports.run = async (client, inter) => {
    
    if(db.get(`ticketChannel_${inter.channelId}`) != true){
        return await inter.reply(`You can only do this command in a ticket channel!`)
    }

    const name = inter.options.getString('new-name');
    inter.channel.setName(`ticket-${name}`)

    return await inter.reply({ content: `This channel has been renamed! (ticket-${name})`})
    
}

module.exports.help = {
    name: 'rename'
}