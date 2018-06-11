const Discord = require("discord.js");

//This command allows a user to sign up for Samir's Project by running -signmeup
//Once the command is run, it will assign user to the role that will allow them to view the channel!

exports.run = async (client, message, args, member) => {

     //Checks if user DM's the Bot
     //If its a DM command will be refused as Bot cant assign roles in a DM
     if(message.channel.type !== "dm") {
          //Checks if User already signed up
          if(message.member.roles.some(r=>["Member of Team Samir"].includes(r.name)) ) {
              message.channel.send(":bangbang: " + message.author.toString() + ", You already signed up for this project");
          } else {
              //let role = message.guild.roles.find("name", "Member of Team Samir"); //Assigns the role to a variable
              //let signee = message.member; //Assigns the message sender to a variable

              // Add the role!
              //signee.addRole(role).catch(console.error);
              //message.channel.send(":white_check_mark:" + message.author.toString() + ", Thanks for signing up for the Survey Web-App project, you can now access the \#landing-ground channel!");
              //client.channels.get(`439340817375559680`).send(`:drum: ` + message.author.toString() + " has signed up for the project");

              message.channel.send(":exclamation: " + message.author.toString() + ", Thanks for for your interest in the Survey Web-App project, unfortunately this project is full. If you missed your chance to become a dev of the survey app, don't worry, you can still make pull requests to the project, which will be reviewed thoroughly to make sure that it is safe to merge. \n\nYou also have the opportunity to contribute to any of the open source projects Zero to Mastery offers, See below for more information.");
              client.commands.get('projects').run(client, message)
          }

        
     } else {
        message.channel.send(':x: Sorry you can\'t execute this command in a DM, Send the command in a ZTM Channel');
     }

};
  
  exports.help = {
    name: "signmeup"
  };