const Discord = require('discord.js');

module.exports.run = async (client, inter) => {

    if(!inter.member.permissions.has('MANAGE_MESSAGES')){
        return await inter.reply('You do not have the `MANAGE_MESSAGES` permission.')
    }

    const nummer = await inter.options.getNumber('amount-messages');
    if(nummer > 99){return await inter.reply('You can maximum delete 99 messages.')}

    inter.channel.bulkDelete(nummer, true)
    return await inter.reply(`successful ${nummer} messages deleted!`)
    
}

module.exports.help = {
    name: 'clear'
}