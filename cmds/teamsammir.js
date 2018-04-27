const Discord = require("discord.js");

//This command allows a user to sign up for Samir's Project by running -signmeup
//Once the command is run, it will assign user to the role that will allow them to view the channel!

exports.run = async (client, message, args, member) => {

     //Checks if user DM's the Bot
     //If its a DM command will be refused as Bot cant assign roles in a DM
     if(message.channel.type !== "dm") {

        let role = message.guild.roles.find("name", "Member of Team Samir"); //Assigns the role to a variable
        let signee = message.member; //Assigns the message sender to a variable

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