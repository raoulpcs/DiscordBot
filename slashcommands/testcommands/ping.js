const Discord = require('discord.js');

module.exports.run = async (client, inter) => {
    
    return await inter.reply({ content: 'Pong!' })
    
}

module.exports.help = {
    name: 'ping'
}