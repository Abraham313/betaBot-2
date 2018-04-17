const Discord = require("discord.js");

exports.run = (client, message, args) => {

    let embed = new Discord.RichEmbed()
        .setAuthor("** About Zerobot **")
        .setColor("#075eea")
        .setDescription("Built by Matt with Discord.js, contributions are welcome on github.")
        .addField("GitHub Repo", "<https://github.com/mattcsmith/zeroBot>")
    message.channel.send({embed: embed});

};

exports.help = {
name: 'aboutbot'
};