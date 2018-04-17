const Discord = require("discord.js");

exports.run = async (client, message, args,) => {

    let embed = new Discord.RichEmbed()
        .setAuthor("** Markdown & Styling **")
        .setColor("#075eea")
        .setDescription("Discord has some built in styling options known as markdown. One that you might find the most useful is code blocks using back ticks.")
        .addField("Bold Text", "```\*\*Text\*\*```")
        .addField("Italics", "```*italics*```")
        .addField("underlined", "```__underline__```")
        .addField("Codeblocks", "Using backticks as shown below you can create codeblocks.")
        .setImage("https://support.discordapp.com/hc/en-us/article_attachments/211601448/HelloWorldForm.png")
    message.channel.send({embed: embed});
   
};
  
  exports.help = {
    name: "markdown"
  };