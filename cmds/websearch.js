const discord = require('discord.js');
const fetch = require('node-fetch');

const client = new discord.Client;
let url2fetch = 'https://www.googleapis.com/customsearch/v1?key=' + process.env.CSE_API + '&cx=017576662512468239146:omuauf_lfve&q='



exports.run = (client, message, args) => {
    
    let embed = new Discord.RichEmbed()
        .setAuthor("** Markdown & Styling **")
        .setColor("#075eea")
        .setDescription("Discord has some built in styling options known as markdown. One that you might find the most useful is code blocks using back ticks.")
    message.channel.send({embed: embed});

};


exports.help = {
    name: 'search'
  };