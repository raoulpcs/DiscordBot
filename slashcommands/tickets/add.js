const Discord = require('discord.js');
const { Permissions } = require('discord.js'); 
const db = require('quick.db');

module.exports.run = async (client, inter) => {
    
    if(db.get(`ticketChannel_${inter.channelId}`) != true){
        return await inter.reply(`You can only do this command in a ticket channel!`)
    }

    const added = inter.options.getMentionable('user-or-role');
    inter.channel.permissionOverwrites.create(added, { VIEW_CHANNEL: true, SEND_MESSAGES: true })

    return await inter.reply(`${added} is added to this channel!`)
    
}

module.exports.help = {
    name: 'add'
}