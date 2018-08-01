const Discord = require('discord.js')
const db = require('quick.db');
const send = require("quick.hook");
exports.run = async (Discord, client, message, args) => {

  const status = new db.table('AFKs');
  let afk = await status.fetch(message.author.id);
  const embed = new Discord.RichEmbed()
    .setColor(message.guild.me.displayHexColor)

  if (!afk) { 
    embed.setDescription('You are now AFK.');
    status.set(message.author.id, args.join(' ') || `Sorry, ${message.author.username} is AFK.`);
  } else { 
    embed.setDescription('You are no longer AFK.'); 
    status.delete(message.author.id);
      
  }
  send(message.channel, embed, {
        name: message.guild.name,
        icon: message.guild.iconURL
    });
}
