
exports.run = (Discord, client, message, args) => {
  
  let dogembed = new Discord.RichEmbed()
  .setColor("#ff9900")
  .setTitle("Dab")
  .setImage('https://media.giphy.com/media/x4gQEhf736ZMc/giphy.gif');
  message.channel.send(dogembed)
}
