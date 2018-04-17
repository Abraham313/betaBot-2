const Discord = require("discord.js");

exports.run = async (client, message, args,) => {
    
    const embed = new Discord.RichEmbed()
    .setAuthor("** USING DISCORD **")
    .setColor(0x00AE86)
    .setDescription("Getting started with Discord, click the image below for a larger view.")
    .setImage("https://cdn.discordapp.com/attachments/433413771982012421/435751632311943168/discordhelp.png")
    .addField(
        "1. Servers",
        "Servers are groups, you could think of them as companies. The tool bar on the far left shows all the servers your are currently in.")
    .addField(
        "2. Channels", 
        "Channels are topics of conversations. You should choose a channel that closely matches what you wish to discuss before posting. Unlike slack you do not need join channels, you already have access to them all by default.")
    .addField(
        "3. Channel Info", 
        "Some channels may have some further information, you can click this to see more.")
    .addField(
        "4. Notification Bell", 
        "You can disable notifications for this channel by click this icon. You will only recieve notifications if you are @mentioned")
    .addField(
        "5. Pinned Messages", 
        "Each channel has a pinned message section, where you can find posts that have been pinned for future reference")
    .addField(
        "6. Mentions", 
        "This icons will display a panel that shows all instances where you were @mentioned")
    .addField(
        "Changing Theme", 
        "Discord has 2 themes, light and dark. To change theme click the cog button (7), Appearance, Select theme. You could also change the way the posts appear, or the text size.")
  
    message.channel.send({embed});
   
};
  
  exports.help = {
    name: "discord"
  };