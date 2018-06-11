exports.run = async (client, message, args, level) => {
    const msg = await message.channel.send("Ping?");
    setTimeout(() => {
      msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }, 7000);
  };
  
  exports.help = {
    name: "ping"
  };