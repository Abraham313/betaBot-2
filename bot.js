const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const messages = require("./messages.json");

process.setMaxListeners(0); // to set event listeners to infinity 


const prefix = config.prefix;

const client = new Discord.Client({disableEveryone: true});  //Prevents the bot from using @everyone
client.commands = new Discord.Collection();

//Loads Commands
fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} Loaded!`)
        client.commands.set(props.help.name, props);
    });
});


client.on("ready", async () => {
    console.log(`${client.user.username} is ready!`)
    client.commands.get('roleUser').run(client)
    client.user.setActivity(config.activity, { type: 'WATCHING'});
    try {
        let link = await client.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    } catch(e) {
        console.log(e.stack)
    }
});

client.on("message", async message => {

    //Ignores messages sent by bots
    if(message.author.bot) return;


    //Bot recieves DM
    if(message.channel.type === "dm") {
        if(!message.content.startsWith(`${prefix}`)) {
            message.channel.send(":x: I'm not sure what you want to do please choose one of the following commands!")
            client.commands.get('help').run(client, message)
        }
    }

    //Public channel message
    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0];
    let args = messageArray.slice(1);

<<<<<<< HEAD
    if(!command.startsWith(prefix)) return;
=======

    if(!command.startsWith(prefix)) {
        getEmojiCount(message);        // for logging emoji count 
        return;
    };

>>>>>>> 381dec53ee23be573c40205f150ea6d4f9570775

    let cmd = client.commands.get(command.slice(prefix.length));
    if(cmd) {
        cmd.run(client, message, args);
    } else {
        message.channel.send(":x: I'm not sure what you want to do please choose one of the following commands!")
        client.commands.get('help').run(client, message)
    }
});

//When new member joins the Discord server
client.on('guildMemberAdd', member => {
    member.send(messages.welcome); //Sends new member a welcome DM 
    member.addRole(member.guild.roles.find("name", "Member")).catch(console.error) //Adds new member to member role

    //Announce Member Milestones
    let totalUsers = new Discord.RichEmbed()
    .setAuthor("Andrei Neagoie", "https://cdn-images-1.medium.com/max/1200/1*B3FAQic_0zR_cmLdMyAVXw.jpeg")
    .setColor("#ff6600")
    .setTitle("Milestone Reached!.")
    .setDescription("Our community is getting stronger! We now have " + `${client.users.size}` + " web developers around the world which you can help, learn from, network, and send animal gifs to. Congratulations and thank you for being part of this wonderful group of people!")
    .setThumbnail("https://openclipart.org/image/2400px/svg_to_png/94135/new-year01.png")

    if((client.users.size % 1000) === 0) client.channels.get(`${config.milestoneChannelID}`).send(totalUsers)
 });

<<<<<<< HEAD
 client.on("messageDelete", messageDelete => {
   
    const embed = new Discord.RichEmbed()
        .setAuthor(messageDelete.author.tag, messageDelete.author.avatarURL)
        .setColor(0x00AE86)
        .setDescription(messageDelete.content)
        .setFooter("Deleted: ")
        .setTimestamp()

    client.users.get('179604866807627777').send("The following message was deleted:", {embed});
});

client.login(process.env.BOT_TOKEN)
=======

 // function to get Emoji Count and warn a user 
const getEmojiCount = (message) => {
    client.on('raw', event => {
        if (event.t == 'MESSAGE_REACTION_ADD') {
            if (event.d.emoji.name === ':rage:') {
                let messageID =  event.d.message_id;
                message.channel.fetchMessage(messageID).then(function(r){
                    let emojiCount = r.reactions.filter(a => a.emoji.name == ':rage:').map(reaction => reaction.count)[0];

                    // client.channels.get(454393291690213409).send('Test Message');
                    console.log(message.channel.fetchMessage(messageID));
                    return client.;
                })
            }
        }
    });
}



// client.login(process.env.BOT_TOKEN)
>>>>>>> 381dec53ee23be573c40205f150ea6d4f9570775
