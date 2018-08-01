const Discord = require('discord.js')
const db = require('quick.db');
const modlogs = new db.table('Modlogs')
exports.run = async (client, message, args, tools) => {
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You don't have **ADMINISTRATOR** permissions to set modlog for this server");
if(!args[0]) return message.channel.send('The correct usage is : !modlog <channel>')
let cid = args[0].slice(2, -1)
  let log = client.channels.get(cid)
await modlogs.set(`modlog_${message.guild.id}`, cid)
let mchannel = await modlogs.fetch(`modlog_${message.guild.id}`)
message.channel.send(`Modlogs has been set to <#${mchannel}>`)
}