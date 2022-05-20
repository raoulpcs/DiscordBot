const Discord = require('discord.js');
const client = require("../index").client
const { createCmd } = require('../dataHandler');

client.on('messageUpdate', async (oldMessage, newMessage) => {

    const log = oldMessage.guild.channels.cache.find(x => x.id === '965832951751376948')
    if(log === undefined) return
    const embed = new Discord.MessageEmbed()
    .setDescription(`[Click here to go to the message.](https://discord.com/channels/${oldMessage.guildId}/${oldMessage.channelId}/${oldMessage.id}}})`)
    .addField(`The old message`, `${oldMessage.content}`, false)
    .addField(`The new message`, `${newMessage.content}`, false)
    log.send({ embeds: [embed] })
})