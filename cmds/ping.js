exports.run = async (client, message, args, level) => {
    const msg = await message.channel.send("Ping?");
    msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  };
  
  exports.help = {
    name: "ping"
  };