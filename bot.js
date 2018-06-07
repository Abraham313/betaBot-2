const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const messages = require("./messages.json")


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


    if(!command.startsWith(prefix)) {
        return;
    };


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

    if((client.users.size % 500) === 0) client.channels.get(`${config.milestoneChannelID}`).send(totalUsers)
 });

 client.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === ":sweat_smile:") {
        console.log(reaction.users);
    }
});

client.login(process.env.BOT_TOKEN)