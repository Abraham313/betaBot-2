const Discord = require("discord.js");

exports.run = async (client, message, args, member) => {

    //Wont display admin commands in DM, as it cant check user roles
    if(message.channel.type !== "dm") {
        if(message.member.roles.some(r=>["leadership team", "management team"].includes(r.name)) ) {
            let embed = new Discord.RichEmbed()
            .setAuthor("** Admin Commands **")
            .setColor("#f442f1")
            .setDescription("The following admin commands are available")
            .addField(`-ping`, "Pings the bot", true)
            .addField("-purge <qty>", "Remove the qty of messages", true)
        message.channel.send({embed: embed});
        }
    }

    let embed = new Discord.RichEmbed()
        .setAuthor("** HELP TOPICS **")
        .setColor("#075eea")
        .setDescription("The following help topics are avaialble. You can send these commands to the bot in a private message or public channels.\n\nType the command as you see it, <> means they require additional args\n example: `-markdown` \n example: `-bug I found a bug that crashed the bot`")
        .addField("-welcome", "Shows the welcome message (DM only)")
        .addField("-discord", "A basic overview of how to use Discord")
        .addField("-rules", "Please check out the community rules")
        .addField("-code <your code here>", "Have your code submitted to hastebin")
        .addField("-links", "Find a list of some useful resources")
        .addField("-markdown", "How to make your posts stand out")
        .addField("-bug <bug message>", "Submit a bug report for {zeroBot}")
        .addField("-aboutbot", "Find the GitHub repo here, contributions welcome!")
    message.channel.send({embed: embed});
};
  
  exports.help = {
    name: "help"
  };