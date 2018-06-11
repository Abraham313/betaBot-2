const Discord = require("discord.js");

exports.run = async (client, message, args, member) => {

    let embed = new Discord.RichEmbed()
        .setAuthor("** HOW TO SEND CODE **")
        .setColor("#f45c42")
        .setDescription("Following the guidelines below will help others read your code easily and be able to assist you much quicker")
        .addField(
            "Small Code Snippets", 
            "For small code snippets consisting of a couple of lines, encase the code in backticks \`")
        .addField(
            "Larger Code", 
            "Head over to <https://codepen.io> and create a new pen.")
        .addField(
            "React Code", 
            "If you need help with your react code, head on over to <https://codesandbox.io/s/new>")
    message.channel.send({embed: embed});
   
};
  
  exports.help = {
    name: "submitcode"
  };