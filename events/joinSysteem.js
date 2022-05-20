const Discord = require('discord.js');
const client = require("../index").client
const { createCmd } = require('../dataHandler');

client.on('guildMemberAdd', (member) => {

    const channel = member.guild.channels.cache.find(x => x.id === '965851340876177409')
    if(channel === undefined) return

    const joinEmbed = new Discord.MessageEmbed()
        .setDescription(`Welcome ${member} on our Discord Server!`)
    channel.send({ embeds: [joinEmbed] })

    const role = member.guild.roles.cache.find(x => x.id === '965832992922681365')
    member.roles.add(role).catch(() => {});
})