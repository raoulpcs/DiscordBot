const Discord = require('discord.js');

module.exports.run = async (client, inter) => {

    if(!inter.member.permissions.has("ADMINISTRATION")){
        return await inter.reply({ content: 'You do not have the `ADMINISTRATION` permission.' })
    }
    
    const text = inter.options.getString('text');
    return await inter.reply({ content: text })
    
}

module.exports.help = {
    name: 'echo'
}