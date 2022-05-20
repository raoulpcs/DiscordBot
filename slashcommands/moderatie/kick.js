const Discord = require('discord.js');

module.exports.run = async (client, inter) => {
    
    if(!inter.member.permissions.has("KICK_MEMBER")){
        return await inter.reply({ content: 'You do not have the `KICK_MEMBERS` permission.' })
    }

    const user = inter.options.getUser('user');
    
    setTimeout(() => {inter.guild.members.kick(user.id).catch(() => {})}, 1000)

    return await inter.reply(`${user} is successful kicked!`)
    
}

module.exports.help = {
    name: 'kick'
}