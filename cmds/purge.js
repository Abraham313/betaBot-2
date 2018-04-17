exports.run = (client, message, args) => {

      if(message.channel.type !== "dm") {
        if(message.member.roles.some(r=>["leadership team", "management team"].includes(r.name)) ) {
            const user = message.mentions.users.first();
            const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
            if (!amount) return message.channel.send(':x: You must specify an amount of posts to delete!');
            if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
            message.channel.fetchMessages({
            limit: amount,
            }).then((messages) => {
            if (user) {
            const filterBy = user ? user.id : Client.user.id;
            messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
            }
            message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
            });
          } else {
            message.channel.send(':x: Sorry you can\'t execute this command!');
        }
      } else {
        message.channel.send(':x: This command cant be used in Direct Messages')
      }
  
};

exports.help = {
  name: 'purge'
};