const Discord = require("discord.js");

exports.run = (client, message, args) => {
    
    let embed = new Discord.RichEmbed()
        .setAuthor("** USEFUL LINKS **")
        .setColor("#075eea")
        .setDescription("Some handy links that you may find useful:\n* [Website](http://zerotomastery.io) \n* [Github](https://github.com/zero-to-mastery) \n* [Group Projects](http://www.zerotomastery.io/status.html) \n* [Andrei's Blog](https://medium.com/@andreineagoie/latest) \n* [Andrei's Twitter](https://twitter.com/AndreiNeagoie) \n* [Resources](https://zero-to-mastery.github.io/resources/)")
    message.channel.send({embed: embed});

};

exports.help = {
  name: 'links'
};