const Discord = require('discord.js');
const db = require('quick.db');
const autoroles = new db.table('Autoroles');
exports.run = async (Discord, client, message, args, tools) => {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`You need **ADMINISTRATOR** permission to use this command.`)
let cid = args[0].slice(3, -1)
if(isNaN(cid)) return message.channel.send(`Invalid role!`)
autoroles.set(`Autorole_${message.guild.id}`, { guildid: message.guild.id, role: cid })
message.channel.send(`Autorole has been set to <@&${cid}>`)
}