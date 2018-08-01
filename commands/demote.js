var roblox = require('noblox.js');

exports.run = (Discord, client, message, args) => {
if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("No can do pal!, MANAGE_ROLES is needed.");
	
	
var groupId = parseInt(process.env.group);
var minimumRank = 1;
let staffc = message.guild.channels.find("name", "logs")

roblox.login({username: process.env.username, password: process.env.password}).then((success) => {

}).catch(() => {console.log("Failed to login.");});

    	var username = args[0]
    	if (username){
    		message.channel.send(`Checking ROBLOX for ${username}`)
    		roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankInGroup(groupId, id)
			        
				.then(function(rank){
					
						roblox.demote(groupId, id)
						.then(function(roles){
							message.channel.send(`Demoted from ${roles.oldRole.Name} to ${roles.newRole.Name}`)
							const embed = new Discord.RichEmbed()
							    .setColor(0x8cff00)
							    .setTimestamp()
							    .setDescription(`**Action:** Demote\n**Target:** ${username}\n**User:** ${message.author.tag}`);
							staffc.send({embed});
						}).catch(function(err){
							message.channel.send("Failed to demote.")
						});
					
				}).catch(function(err){
					message.channel.send("Couldn't get them in the group.")
				});
			}).catch(function(err){ 
				message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
    	} else {
    		message.channel.send("Please enter a username.")
    	}
    	return;
}