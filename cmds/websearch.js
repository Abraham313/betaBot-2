const discord = require('discord.js');
const fetch = require('node-fetch');

const bot = new discord.Client;
let url2fetch = 'https://www.googleapis.com/customsearch/v1?key=' + process.env.CSE_API + '&cx=017576662512468239146:omuauf_lfve&q='



exports.run = (client, message, args) => {
    
    bot.on('message', message => {
        return message.channel.send("You Typed a message");
    })

};


exports.help = {
    name: 'search'
  };