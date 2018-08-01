const db = require('quick.db')
exports.run = (Discord, client, message, args) => {
let guildid = message.guild.id;
let username = args[0];
let password = args[1];
let groupid = args[2];
let maxrank = args[3];
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No can do pal!, ADMINISTRATOR is needed.");
db.set(`RobloxProfile_${message.guild.id}`, { username: args[0], password: args[1], guildid: message.guild.id, groupid: args[2], maxrank: args[3] })
message.channel.send("Roblox infomation updated. Account set to " + username + " with password " + password + " on group " + groupid + " with maxrank " + maxrank + ".")
}