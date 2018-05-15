const Discord = require("discord.js");

//Define Coding Challenge # eg. Coding-Challenge 5
const challengeNumber = 5;

exports.run = (client, message, args) => {

    if (!args[0]) return message.reply("No submission detected. Please use the following structure \`\`\`=challenge Coding Challenge#5 Submission: check it out github.com/username/repo\`\`\`");
    if (args[0] === "challenge") return message.reply("No submission detected. Please use the following structure \`\`\`=challenge Coding Challenge#5 Submission: check it out github.com/username/repo\`\`\`");
    
    submission = args.join(" ");
    if (submission.includes("github.com")) {

        //Brutally extract github repo from args
        let gh = (submission + " ").slice(submission.indexOf("github.com/"), submission.indexOf(" ",submission.indexOf("github.com/"))).slice(11)

        //Define Embed
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
            .setColor("#075eea")
            .setDescription(`Check out my submission for **Coding Challenge ${challengeNumber}**`)
            .addField("GitHub Repo", `(https://github.com/${gh})`)
            .setFooter("Submitted: ")
            .setTimestamp()

        //Sends to Admin Channel (#submissions)
        //client.channels.get(`445660911693201419`).send({embed: embed})

        //Replys to User in #coding-challenge
        //client.channels.get(`445660911693201419`).send(":white_check_mark: Thanks for submitting your coding challenge entry!", {embed: embed});

    } else if (submission.includes("herokuapp.com")) {

        //Brutally extract heroku repo from args
        let heroku = (submission + " ").slice(submission.indexOf("https://"), submission.indexOf(" ",submission.indexOf("herokuapp.com/"))).slice(11)



        //Define Embed
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
            .setColor("#075eea")
            .setDescription(`Check out my submission for **${challengeNumber}**`)
            .addField("GitHub Repo", `(https://github.com/${gh})`)
            
        //Sends Results To Someone (Currently Matt)
        client.users.get('179604866807627777').send({embed: embed});

        //Sends to a Channel (Cirrently Submission Demo)
        client.channels.get(`441767451852800000`).send({embed: embed})

        //Replys to User
        message.reply(":white_check_mark: Thanks for submitting your coding challenge entry!");
    }
};

exports.help = {
  name: 'chall'
};