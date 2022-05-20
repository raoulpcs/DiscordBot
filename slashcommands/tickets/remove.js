const Discord = require('discord.js');
const { Permissions } = require('discord.js'); 
const db = require('quick.db');

module.exports.run = async (client, inter) => {
    
    if(db.get(`ticketChannel_${inter.channelId}`) != true){
        return await inter.reply(`You can only do this command in a ticket channel!`)
    }

    const removed = inter.options.getMentionable('user-or-role');
    inter.channel.permissionOverwrites.create(removed, { VIEW_CHANNEL: false, SEND_MESSAGES: false })

    return await inter.reply(`${removed} is removed from this channel!`)
    
}

module.exports.help = {
    name: 'remove'
}