const Discord = require("discord.js");
const client = new Discord.Client();
const meme = require('memejs');

exports.run = async (Discord, client, message, args, level) => { // eslint-disable-line no-unused-vars
  meme(function(data) {
  const embed = new Discord.RichEmbed()
  .setTitle(data.title[0])
  .setColor("RANDOM")
  .setImage(data.url[0])
  message.channel.send({embed});
  })};

