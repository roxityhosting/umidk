const Discord = require("discord.js");

module.exports.run = async (Discord, client, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return;
  if(args[0] == "help"){
    message.reply("Usage: !removerole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rMember) return message.reply("Couldn't find that user");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
  await(rMember.removeRole(gRole.id));

    message.channel.send(`Removed that role from ${kUser}`);
  
}
exports.help = {
    name: 'REMOVEROLE',
    description: 'Removes a role from the user',
    usage: '!removerole @user <role name>'
};