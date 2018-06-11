const discord = require('discord.js');
const fetch = require('node-fetch');

//const bot = new discord.Client;
let url2fetch = 'https://www.googleapis.com/customsearch/v1?key=' + process.env.CSE_API + '&' + process.env.CSE_CX +'&q=';

const randRespMsg = [
    "I found something for you deep in the web. \:point_down:", 
    "I found a couple of awesome results, check them out. \:point_down:", 
    "I'm pretty sure one of these is exactly what you are looking for, don't you think? \:point_down:"
]



exports.run = async (client, message, args) => {
    
    if (message.content.split(' ').length == 1) {
        message.channel.send(`${message.author}, Please provide a search query. I can't search **nothing** for you. \:confused:`)
    } else {
        let searchQuery = message.content.split(' ');
        searchQuery.shift();
        searchQuery = searchQuery.join('+');
        console.log(searchQuery)
        const msg = await message.channel.send(`${message.author}, hold on! I am searching the web hard to find the best match of your query. \:nerd: `)
        
        // CSE
        fetch(url2fetch + searchQuery)
        .then(res => res.json())
        .then(res => {


            // generating random message 
            let randMsgNum = Math.floor(Math.random()*(2 - 0 + 1 ) + 0);
            let message2send = message.author + ", " + randRespMsg[randMsgNum];
            msg.edit(message2send)


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
};


exports.help = {
    name: 'search'
};