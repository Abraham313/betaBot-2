const Discord = require("discord.js");

exports.run = async (client, message, args,) => {
    
    const embed = new Discord.RichEmbed()
    .setAuthor("** USING VOICE CHAT **")
    .setColor(0x00AE86)
    .setDescription("Getting started with voice chat, click the image below for a larger view.")
    .setImage("https://cdn.discordapp.com/attachments/435949792389234690/440117418824826890/voice.png")
    .addField(
        "1. Connecting to a voice channel",
        "Connecting to a voice channel as simple as locating a voice channel and clicking on it. Voice channels will have a little speaker icon to the left of the name.")
    .addField(
        "2. Disconnecting from a voice channel", 
        "Leaving a voice channel is just a case of clicking the hang up icon.")
    .addField(
        "3. Muting yourself", 
        "Clicking this will stop Discord listening to your mic, no one will be able to hear you! This icon will also appear next to your name to show everyone that you are muted")
    .addField(
        "4. Deafen yourself", 
        "Clicking this will stop Discord broadcasting to your speakers, you will not be able to hear anyone! Again this icon will appear next to your name.")
    .addBlankField(true)
    .addField(
        "ADVANCED SETTINGS", 
        "Check out this video for some advanced voice settings, such as setting push-to-talk and volume controls! https://youtu.be/LDVqruRsYtA?t=6m14s")
    .addBlankField(true)
  
    message.channel.send({embed});
   
};
  
  exports.help = {
    name: "voice"
  };