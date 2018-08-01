const Discord = require('discord.js')
const db = require('quick.db');
const serverstats = new db.table('ServerStats');
exports.run = async (Discord, client, message, args, tools) => {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`You need **ADMINISTRATOR** permission to use this command.`)
if(args[0] === 'enable') {
let totusers = await serverstats.fetch(`Stats_${message.guild.id}`, { target: '.totusers' })
let membcount = await serverstats.fetch(`Stats_${message.guild.id}`, { target: '.membcount' })
let botcount = await serverstats.fetch(`Stats_${message.guild.id}`, { target: '.botcount' })
if(totusers !== null || membcount !== null || botcount !== null) return message.channel.send(`Server stats are already enabled for this server. You can use !serverstats disable to disable it`)
if(!message.guild.me.hasPermission(`MANAGE_CHANNELS`)) return message.channel.send(`I don't have **MANAGE_CHANNELS** permission`)
	const totalsize = message.guild.memberCount;
	const botsize = message.guild.members.filter(m => m.user.bot).size;
	const humansize = totalsize - botsize;
message.guild.createChannel('Server Stats', 'category', [{
  id: message.guild.id,
  deny: ['CONNECT']
}]).then(channel => {
channel.setPosition(0)
message.guild.createChannel("Total Users : " + totalsize, 'voice', [{
  id: message.guild.id,
  deny: ['CONNECT']
}]).then(channel1 => {
channel1.setParent(channel.id)
let x = channel1.id
message.guild.createChannel("Member Count  : " + humansize, 'voice', [{
  id: message.guild.id,
  deny: ['CONNECT']
}]).then(channel2 => {
channel2.setParent(channel.id)
let y = channel2.id
message.guild.createChannel("Bot Count : " + botsize, 'voice', [{
  id: message.guild.id,
  deny: ['CONNECT']
}]).then(async channel3 => {
channel3.setParent(channel.id)
let z = channel3.id
await serverstats.set(`Stats_${message.guild.id}`, { guildid: message.guild.id, totusers: x, membcount: y, botcount: z, categid: channel.id})
})
})
})
})
message.channel.send(`Serverstats enabled for this server`)
} else if (args[0] === 'disable') {
  
let totusers = await serverstats.fetch(`Stats_${message.guild.id}`, { target: '.totusers' })
let membcount = await serverstats.fetch(`Stats_${message.guild.id}`, { target: '.membcount' })
let botcount = await serverstats.fetch(`Stats_${message.guild.id}`, { target: '.botcount' })
let categ = await serverstats.fetch(`Stats_${message.guild.id}`, { target: '.categid' })
if(totusers === null || membcount === null || botcount === null) return message.channel.send(`Serverstats for this server was not enabled previously so I can't disable anything`)
  client.channels.get(totusers).delete()
  client.channels.get(membcount).delete()
  client.channels.get(botcount).delete()
  client.channels.get(categ).delete()
  
serverstats.delete(`Stats_${message.guild.id}`)
message.channel.send(`Serverstats disabled for this server. You can enable it by using !serverstats enable`)
}
}