const discord = require('discord.js');
const client = new discord.Client({disableEveryone: true});

const checkReaction = () => {
    client.on('MESSAGE_REACTION_ADD', event => {
        console.log(event);
    })
}