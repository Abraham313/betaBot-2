exports.run = (client, message, args) => {
    if (!args[0]) return;
    if (args[0] === "challenge") return message.reply("No submission detected. Please ensure you include all the relevant information");
    args = args.join(" ");
    message.reply("Thanks for submitting your coding challenge entry!");
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
    client.users.get('179604866807627777').send(`${content}`);
};

exports.help = {
  name: 'challenge'
};