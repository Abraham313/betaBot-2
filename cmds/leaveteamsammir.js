const Discord = require("discord.js");

//This command allows a user to leave Samir's Project by running -signmeout
exports.run = async (client, message, args, member) => {

     //Checks if user DM's the Bot
     //If its a DM command will be refused as Bot cant assign roles in a DM
     if(message.channel.type !== "dm") {
          //Checks if User already signed up
          if(message.member.roles.some(r=>["Member of Team Samir"].includes(r.name)) ) {
            let role = message.guild.roles.find("name", "Member of Team Samir"); //Assigns the role to a variable
            let signee = message.member; //Assigns the message sender to a variable

            // Remove the role!
            signee.removeRole(role).catch(console.error);
            client.channels.get(`439340817375559680`).send(`:drum: ` + signee + " has left the project")
              
          } else {
            message.channel.send(":bangbang: " + message.author.toString() + ", You cant leave a project you havent signed up for");

              
          }

        
     } else {
        message.channel.send(':x: Sorry you can\'t execute this command in a DM, Send the command in a ZTM Channel');
     }

};
  
  exports.help = {
    name: "signmeout"
  };