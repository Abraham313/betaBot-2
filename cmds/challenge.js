const Discord = require("discord.js");
const challengeNumber = 6; //Define Challenge Number (Coding Challenge #5)

exports.run = (client, message, args) => {

    //Converts Arguments array to string
    submission = args.join(" ");

    //Validates submission - Ensures it contains a link
    desc = submission;
    if (!submission.match(/\bhttps?:\/\/\S+/gi)) {
        message.reply(":bangbang: Please ensure you include at least one link to your project. All links **MUST** include http(s)://")
        return client.commands.get('challenge-help').run(client, message)

    }

    //Extracts URLS
    let urls = submission.match(/\bhttps?:\/\/\S+/gi);
    
    //Define Embed
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
    .setColor("#ff3399")
    .setDescription(`Check out my submission for **Coding Challenge ${challengeNumber}**`)
    .setFooter("Submitted: ")
    .setTimestamp()

    //Proccess Links - Creates Header and then adds the links to the embed
    for (i = 0; i < (urls.length); i++) {
        
        if(urls[i].includes("heroku")){
            var site = "Heroku Deployment"
        } else if(urls[i].includes("github.com")) {
            var site = "Github Repo"
        } else if(urls[i].includes("github.io")) {
            var site = "Github Pages"
        } else {
            var site = "Other Link"
        }

        embed.addField(`${site}`, urls[i])
        var desc = desc.replace(urls[i],"");

    }

    //If comments have been provided, add them to the embed
    if(desc.length > 4) embed.addBlankField(), embed.addField("Author Description", `${desc}`)
    
    //Sends to Admin Channel (#submissions)
    client.channels.get(`445660911693201419`).send({embed: embed})

    //Replys to User in #coding-challenge
    client.channels.get(`434849407054381096`).send(":white_check_mark:" + message.author.toString() + "Thanks for submitting your coding challenge entry!", {embed: embed});

};

exports.help = {
  name: 'challenge'
};
