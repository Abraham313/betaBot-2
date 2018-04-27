const Discord = require("discord.js");

exports.run = async (client, message, args, member) => {

     //Wont display admin commands in DM, as it cant check user roles
     if(message.channel.type !== "dm") {

        let role = message.guild.roles.find("name", "Member of Team Samir");

        // or the person who made the command: 
        let signee = message.member;

        // Add the role!
        signee.addRole(role).catch(console.error);
        message.channel.send(":white_check_mark:" + message.author.toString() + ", Thanks for joining Lading Ground, please see #lading-ground");
     } else {
        message.channel.send(':x: Sorry you can\'t execute this command in a DM, Send the command in a ZTM Channel');
     }




};
  
  exports.help = {
    name: "signmeup"
  };