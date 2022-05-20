const Discord = require('discord.js');
const client = require("../index").client
const { createCmd } = require('../dataHandler');

client.on('messageDelete', async (message) => {

    const log = message.guild.channels.cache.find(x => x.id === '965832951751376948')
    if(log === undefined) return
    const embed = new Discord.MessageEmbed()
    .addField(`The deleted message:`, `${message.content}`, false)
    .addField(`User`, `${message.author.username}`, false)
    log.send({ embeds: [embed] })
})