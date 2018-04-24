exports.run = (client, message, args) => {
    if (!args[0]) return;
    if (args[0] === "bug") return message.reply("Please specify the bug. Example:\n`/punch isn't working. It isn't mentioning the user I'm trying to punch`");
    args = args.join(" ");
    message.reply("Thanks for submitting a bug!");
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
    client.users.get('179604866807627777').send(`${content}`);
    client.channels.get(`434389298226266113`).send(`${content}`);
};

exports.help = {
  name: 'bug'
};