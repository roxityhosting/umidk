const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (Discord, client, message, args, tools) => {
  const bl = new db.table('bl');
let user = message.mentions.users.first();
await bl.set(`${user.id}`)
message.channel.send(`${user.tag} has been blacklisted from all iWave commands.`)
}