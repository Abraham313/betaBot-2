const discord = require('discord.js');

const client = new discord.Client({disableEveryone: true});

module.exports = () => {
    client.on('message', msg =>{
        msg.reply(`Hi, I am no more dead!`);
        console.log(`I am working`);
    })
}