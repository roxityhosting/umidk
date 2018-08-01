const Discord = require('discord.js');

exports.run = async (Discord, client, message, args, tools) => {
let giveRole = message.guild.roles.find("name", "TGS Subscriber");
let rMember = message.author
await (rMember.addRole(giveRole.id))
message.channel.send("Role Added")
}