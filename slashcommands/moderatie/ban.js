const Discord = require('discord.js');

module.exports.run = async (client, inter) => {
    
    if(!inter.member.permissions.has("BAN_MEMBER")){
        return await inter.reply({ content: 'You do not have the `BAN_MEMBERS` permission.' })
    }

    const user = inter.options.getUser('user');
    
    setTimeout(() => {inter.guild.members.ban(user.id).catch(() => {})}, 1000)

    return await inter.reply(`${user} is successful banned!`)
    
}

module.exports.help = {
    name: 'ban'
}