const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {
  let {body} = await superagent
  .get(`https://random.dog/woof.json`);
  
  let dogembed = new Discord.RichEmbed()
  .setColor("#ff9900")
  .setTitle("Doggo")
  .setImage(body.url);
  message.channel.send(dogembed)
}
