const Discord = require("discord.js");

exports.run = async (client, message, args,) => {

    let header = new Discord.RichEmbed()
        .setColor("#075eea")
        .setTitle("__**Welcome to the Zero to Mastery Discord server!**__")
        .setImage('https://cdn.discordapp.com/attachments/434387243579342849/434406596047667200/zeroToMasteryIcon.png')

    let embed = new Discord.RichEmbed()
        .setColor("#075eea")
        .setAuthor(
            "{Zero to Mastery} - Learn Anything", 
            "https://media.discordapp.net/attachments/434387243579342849/434406596047667200/zeroToMasteryIcon.png", 
            "https://zerotomastery.io")

        .setDescription(
            "Welcome to the new and improved Zero to Mastery's Discord Community and we are delighted to have you apart of this amazing community. This community is a valuable resource, especially in your early stages as a developer. Take the opportunity to chat, discuss and ask questions with other members. You will also find lots of interesting articles posted by your fellow students.")
    
        .addField(
            "__\"Why Discord?\"__", 
            "Moving to discord has been a huge step for the community, but one we feel is the right move. Lifting the limitations and restrictions Slack has on such a large community. Discord also has some nice features, such as voice channels.")

        .addField(
            "__\"Its Different\"__", 
            "We appreciate that Discord is slightly different from slack and may take some adjusting to, we have structured the server to match Slacks layout as much as is possible. If you need help using discord your should check out the __**#using-discord**__ channel. Feel free to reach out to a member of the __**@management team**__ if your still have questions.")

    if(message.channel.type !== "dm") {

        if(message.member.roles.some(r=>["Leadership Team", "Management Team"].includes(r.name)) ) {
            message.channel.send({embed: header})
            message.channel.send({embed: embed})
            client.commands.get('rules').run(client, message)
            client.commands.get('links').run(client, message)
        }else{
            message.channel.send(":x: You can't run that command here, send it to the bot in a direct message instead")
        }

    } else {
        message.channel.send({embed: header})
        message.channel.send({embed: embed})
        client.commands.get('rules').run(client, message)
        client.commands.get('links').run(client, message)
        }
};
  
  exports.help = {
    name: "welcome"
  };