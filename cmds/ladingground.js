const Discord = require("discord.js");

exports.run = async (client, message, args, member) => {

    member.addRole(message.guild.roles.find("name", "Member of Team Samir")).catch(console.error) //Adds new member to member role


};
  
  exports.help = {
    name: "signmeup"
  };