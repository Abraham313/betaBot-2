const discord = require('discord.js');
const fetch = require('node-fetch');
const config = require('./config.json');


const bot = new discord.Client;
let url2fetch = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyA0-muHzzLl31ig04bBvxJpg8ZODZp5iTM&cx=017576662512468239146:omuauf_lfve&q='



const searchBot = () => {
    bot.on('message', message => {
        if (!message.content.startsWith(config.prefix + "search") || message.author.bot) {
            return;
        } 
        if (message.content.split(' ').length == 1) {
            message.channel.send(`${message.author}, Please provide a search query. I can't search **nothing** for you. \:confused:`)
        }else {
            let searchQuery = message.content.split(' ');
            searchQuery.shift();
            searchQuery = searchQuery.join('+');
            console.log(searchQuery)
            message.channel.send(`${message.author}, hold on! I am searching the web hard to find the best match of your query. \:nerd: `)
            // CSE
            fetch(url2fetch + searchQuery)
            .then(res => res.json())
            .then(res => {
                for (let i=0; i<3; i++) {
                    message.channel.send({embed: {
                        color:  Math.floor(Math.random() * 16777214) + 1,
                        title: res.items[i].title,
                        url: res.items[i].link,
                        description: res.items[i].snippet
                    }})
                }
            })
        }
    })
}

module.exports = searchBot;