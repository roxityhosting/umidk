const Discord = require("discord.js");
const send = require("quick.hook");
module.exports.run = async (Discord, client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    if (args[0] == "help") {
      send(message.channel, "Usage: !addrole @user <role>", {
        name: message.guild.name,
        icon: message.guild.iconURL
    });
      return;
    }
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rMember) return;
    let role = args.join(" ").slice(22);
    if (!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if (!gRole) return message.reply("Couldn't find that role.");
  
    if (rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
    await (rMember.addRole(gRole.id));
 
   send(message.channel, `Added that role to ${kUser}`, {
        name: message.guild.name,
        icon: message.guild.iconURL
    });
    
  }  

exports.help = {
    name: 'ADDROLE',
    description: 'Adds a role to that user',
    usage: '!addrole @user <role name>'
};
