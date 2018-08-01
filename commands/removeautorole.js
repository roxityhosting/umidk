const Discord = require('discord.js');
const db = require('quick.db');
const autoroles = new db.table('Autoroles');
exports.run = async (Discord, client, message, args, tools) => {
autoroles.delete(`Autorole_${message.guild.id}`)
message.channel.send(` Deleted the autorole!`)
}