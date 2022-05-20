async function createCmd(client, guildId){
    const data = [

        // ping commando
        {
            name: 'ping',
            description: `Send a ping command.`
        },
        {
            name: 'echo',
            description: 'Send what I say.',
            options: [{
                name: 'text',
                type: 'STRING',
                description: 'Enter the text that will be returned.',
                required: true
            }]
        },
        {
            name: 'ban',
            description: 'Ban an user from your guild.',
            options: [{
                name: 'user',
                description: 'Ping the user that you want to ban!',
                type: 'USER',
                required: true
            }]
        },
        {
            name: 'kick',
            description: 'Kick an user from your guild.',
            options: [{
                name: 'user',
                description: 'Ping the user that you want to kick!',
                type: 'USER',
                required: true
            }]
        },
        {
            name: 'new',
            description: 'Make an new ticket!'
        },
        {
            name: 'close',
            description: 'Close an ticket!'
        },
        {
            name: 'rename',
            description: 'Give the ticket a another name!',
            options: [{
                name: 'new-name',
                description: `Enter the new name for the ticket!`,
                type: 'STRING',
                required: true
            }]
        },
        {
            name: 'add',
            description: 'Add an user or role to the ticket!',
            options: [{
                name: 'user-or-role',
                description: `Mention the user or role you want to add!`,
                type: 'MENTIONABLE',
                required: true
            }]
        },
        {
            name: 'remove',
            description: 'Remove an user or role from the ticket!',
            options: [{
                name: 'user-or-role',
                description: `Mention the user or role you want to delete!`,
                type: 'MENTIONABLE',
                required: true
            }]
        },
        {
            name: 'suggest',
            description: 'Make a suggestion for our Discord Server!',
            options: [{
                name: 'your-idea',
                type: 'STRING',
                required: true,
                description: 'Enter your suggestion here!'
            }]
        },
        {
            name: 'clear',
            description: 'Delete message in my server!',
            options: [{
                name: 'amount-messages',
                type: 'NUMBER',
                required: true,
                description: 'Enter the amount of message in that you want to delete!'
            }]
        },
        {
            name: 'help',
            description: 'Get our help command!',
            options: [{ 
                name: 'category',
                type: 'STRING',
                required: true,
                description: 'Choose a category!',
                    choices: [
                    {
                        name: 'Ticket Commands',
                        description: 'A list of Ticket Commands.',
                        value: 'tickets'
                    },
                    {
                        name: 'Moderation Commands',
                        description: 'A list of Moderation Commands.',
                        value: 'moderation'
                    }]
            }]
        }

    ]

    await client.guilds.cache.get(guildId)?.commands.set(data);

}

module.exports =  { createCmd }