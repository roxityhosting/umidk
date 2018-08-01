const db = require('quick.db')
exports.run = (Discord, client, message, args) => {
let guildid = message.guild.id;
let channel1 = message.mentions.channels.first()

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No can do pal!, ADMINISTRATOR is needed.");
db.set(`LogChannel_${message.guild.id}`, { channel: channel1})
message.channel.send("Channel set to: " + channel1)
}
