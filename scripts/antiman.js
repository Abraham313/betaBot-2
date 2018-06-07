const discord = require('discord.js');

const client = discord.Client({disableEveryone: true});

module.exports = () => {
    client.on('message', msg => {
        msg.channel.send(msg.channel.id);
    })
}