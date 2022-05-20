const Discord = require('discord.js');
const { Permissions } = require('discord.js'); 
const db = require('quick.db');

module.exports.run = async (client, inter) => {
    
    if(db.get(`ticketChannel_${inter.channelId}`) != true){
        return await inter.reply(`You can only do this command in a ticket channel!`)
    }
    
    await inter.reply(`This ticket has been successfully closed and will be deleted!`)
    db.delete(`ticket_${inter.user.id}`)
    db.delete(`ticketChannel_${inter.channelId}`)

    setTimeout(() => {
        inter.channel.delete()
    }, 5000)

}

module.exports.help = {
    name: 'close'
}