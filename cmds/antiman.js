const discord = require('discord');

exports.run = (client, message, args) => {
    message.channel.send(message.channel.id);
}