const Discord = require("discord.js");

exports.run = async (client, message, args, member) => {

    let embed = new Discord.RichEmbed()
        .setAuthor("** HELP TOPICS **")
        .setColor("#075eea")
        .setDescription("The following help topics are avaialble. You can send these commands to the bot in a private message or public channels.\n\nType the command as you see it, <> means they require additional args\n example: `-markdown` \n example: `-bug I found a bug that crashed the bot`")
        .addField("-submitcode", "Find out how to submit code on ZTM Discord")
        .addField("-welcome", "Shows the welcome message (DM only)")
        .addField("-discord", "A basic overview of how to use Discord")
        .addField("-voice", "A basic overview on using voice channels")
        .addField("-rules", "Please check out the community rules")
        .addField("-haste <your code here>", "Have your code submitted to hastebin")
        .addField("-links", "Find a list of some useful resources")
        .addField("-markdown", "How to make your posts stand out")
        .addField("-bug <bug message>", "Submit a bug report for {zeroBot}")
        .addField("-aboutbot", "Find the GitHub repo here, contributions welcome!")
    message.channel.send({embed: embed});
};
  
  exports.help = {
    name: "help"
  };