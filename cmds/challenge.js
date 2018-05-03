const Discord = require("discord.js");

exports.run = (client, message, args) => {

    if (!args[0]) return;
    if (args[0] === "challenge") return message.reply("No submission detected. Please ensure you include all the relevant information");
    
    submission = args.join(" ");
    message.reply(":white_check_mark: Thanks for submitting your coding challenge entry!");

    let embed = new Discord.RichEmbed()
        .setAuthor("**${message.author.username}#${message.author.discriminator}**", message.author.avatar)
        .setColor("#075eea")
        .setDescription(submission)

    client.users.get('179604866807627777').send({embed: embed});
};

exports.help = {
  name: 'challenge'
};