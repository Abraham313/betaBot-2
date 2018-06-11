const Discord = require("discord.js");

exports.run = async (client, message, args, member) => {

    let embed = new Discord.RichEmbed()
        .setAuthor("** CHALLENGE SUBMISSION HELP **")
        .setColor("#ff3399")
        .setDescription("Submitting your coding entry, using the following examples. Please take note of the Important Notes!")
        .addField("Simple Command", "This command will submit your Github repo with your entry. \n\`\`\`-challenge https://github.com/**<USERNAME>**/**<REPO>**\`\`\`")

        .addField("What links can be submitted?", "You are able to submit any link you wish, however check with the conditions of the coding challenge to ensure there are no restrictions on your chosen platform. \n\`\`\`-challenge https://zero-to-mastery.github.io/book-tracker/\`\`\` \`\`\`-challenge https://yourapp.herokuapp.com\`\`\` \`\`\`-challenge https://yoursite.com\`\`\` ")

        .addField("Multiple Links","You can add as many links as you need to, simply chain the links on the command as shown below \n\`\`\`-challenge https://yourapp.herokuapp.com https://github.com/<NAME>/<REPO> https://yoursite.com\`\`\`")

        .addField("Adding Description/Comments", "Adding a descriptions, comments or notes is also possible. Just add you comments to the end of the command, as shown below \`\`\`-challenge https://github.com/<USERNAME>/<REPO> This is my entry to the coding challenge.\`\`\`")

        .addBlankField()
        .addField("IMPORTANT NOTES", "- Ensure you edit all the links above with your details. \n- Ensure all links you submit start with **HTTP://** or **HTTPS://** \n- Read the breif sheet fully, to ensure your submission conforms to the requirements")
        .addBlankField()

        .setThumbnail("https://1607.tel/icons/register.png")
        .setFooter("Need more help? Direct Message @matt", "http://icons-for-free.com/free-icons/png/512/1902262.png")
    message.channel.send({embed: embed});
};
  
  exports.help = {
    name: "challenge-help"
  };