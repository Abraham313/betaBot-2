const Discord = require("discord.js");
const chanID = require("../configs/channels.json");

// Upon request - Stripes a user of thier right to post in #women-in-tech
    // Command =    -nomen @username

exports.run = async (client, message, args, member) => {
    
    // Gets the mentioned users
    let antiman = message.mentions.members.first()

    // Gets Channel Command was issued in
    let issuedChannel = message.channel.id

    //  Define Embed to post in channel
    let ladiesEmbed = new Discord.RichEmbed()
        .setAuthor("Removed Member's Post Abilities")
        .setColor("#f45c42")
        .setDescription(args[0] + " is no longer able to post in this channel!")
        .addField("Further Action", "The management team have been notified of this action. Please reach out to a member of the managment team, should you feel that further action is required.")
        .addField("Mistakes Were Made!", "If you believe this was in error please contact a member of the management team.")
    
    console.log("a",!issuedChannel === chanID.womenInTechChannel)
    console.log("b",issuedChannel)

    if(!antiman) {message.channel.send("You need to mention a user eg. @username")}
    else if (!issuedChannel === chanID.womenInTechChannel) {message.channel.send("You can only use this command in #woment-in-tech")}
    else {
        client.channels.get(chanID.womenInTechChannel).overwritePermissions(antiman, {SEND_MESSAGES: false});
        message.channel.send({embed: ladiesEmbed});
        client.channels.get(chanID.botLogChannel).send(`:warning:  ` + antiman.toString() + " was denied access to #woment-in-tech by" + message.author.toString());
    }
};
  
  exports.help = {
    name: "noman"
  };