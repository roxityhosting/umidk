
const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {
  let {body} = await superagent
  .get(`http://aws.random.cat//meow`);
  
  let dogembed = new Discord.RichEmbed()
  .setColor("#ff9900")
  .setTitle("Meow")
  .setImage(body.file);
  message.channel.send(dogembed)
}
