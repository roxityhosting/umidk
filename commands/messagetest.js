var roblox = require('noblox.js');
const db = require('quick.db')
exports.run = async (Discord, client, message, args) => {

if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("No can do pal!, MANAGE_ROLES is needed.");
let pw = await db.fetch(`RobloxProfile_${message.guild.id}`, { target: '.password' });
let un = await db.fetch(`RobloxProfile_${message.guild.id}`, { target: '.username' });
await roblox.follow({userId: 170493518}).catch(e=> {message.reply(e)}); 
await roblox.message({ recipient: 170493518, subject: 'Premier Inn Ranking', body: 'You have been ranked in Premier Inn by asfasgfjaskgnaslkjghaslkhghnlkasbgblkjasbgm,abgs,mbsabgbjjsakbbjkgsajksgfajbksgajlbgjbkjblsagjblsgfbjlgsjblsfajlnksfjlkabnlkjbnfsaknjlbsfa' }).then(() => {message.channel.send("Message Sent")});

}