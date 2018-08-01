const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {
  let {body} = await superagent
  .get(`https://rieko.glitch.me/api/img/sloth`);
  
  let dogembed = new Discord.RichEmbed()
  .setColor("#ff9900")
  .setTitle("Sloth")
  .setImage(body.url);
  message.channel.send(dogembed)
}
