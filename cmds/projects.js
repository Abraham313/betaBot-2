const Discord = require("discord.js");

exports.run = async (client, message, args,) => {
    
    
    const embed = new Discord.RichEmbed()
    .setAuthor("** GROUP PROJECTS **")
    .setColor(11809619)
    .setDescription("Getting involved in open source projects has never been easier, there are over 20 projects to choose from in Zero to Mastery alone! \n\nWe don't care if you break things. This is a playground and we encourage failing often. Use this as a practice ground and enjoy contributing to projects you create with your fellow students.")
    .addField(
        "Getting Started",
        "Check out [**This Guide**](https://github.com/zero-to-mastery/start-here-guidelines), using it to add your name to the `CONTRIBUTORS.md` file.")
    .addField(
        "What Next?", 
        "Zero to Mastery has over 20 open source projects, you are able to contribute to in the same way did in the Getting Started section. Find the one(s) that interest you and contribute as you wish")
    .addField(
        "The Challenge", 
        "Your challenge should you choose to accept it, is to make 50 commits to any of the group projects. Share your progess in `#group-projects`")
    .addBlankField()
    .addField(
        "Popular Projects",
        "Here are just a handful of some of the most popular projects available: \n[ZTM Job Board](https://github.com/zero-to-mastery/ZtM-Job-Board) \n[ZTM Website](https://github.com/zero-to-mastery/zero-to-mastery-website) \n[Travel Guide](https://github.com/zero-to-mastery/travel-guide)"
    )
    message.channel.send({embed});
   
};
  
  exports.help = {
    name: "projects"
  };