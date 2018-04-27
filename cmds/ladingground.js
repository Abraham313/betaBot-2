const Discord = require("discord.js");

exports.run = async (client, message, args, member) => {


    let role = message.guild.roles.find("name", "Member of Team Samir");

// or the person who made the command: 
let member = message.member;

// Add the role!
member.addRole(role).catch(console.error);




};
  
  exports.help = {
    name: "signmeup"
  };