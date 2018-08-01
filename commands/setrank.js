var roblox = require('noblox.js');
const db = require('quick.db')
exports.run = async (Discord, client, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("No can do pal!, MANAGE_ROLES is needed.");
  let pw = await db.fetch(`RobloxProfile_${message.guild.id}`, { target: '.password' });
  let un = await db.fetch(`RobloxProfile_${message.guild.id}`, { target: '.username' });
  let gid = await db.fetch(`RobloxProfile_${message.guild.id}`, { target: '.groupid' });
  let mr = await db.fetch(`RobloxProfile_${message.guild.id}`, { target: '.maxrank' });
  let staffc = message.guild.channels.find("name", "logs")	
  var groupId = gid; //replace with stored stuff from earlier
  var maximumRank = mr; //replace with stored stuff from earlier
  let rankchange = args[1];
  
  roblox.login({username: un, password: pw}).catch(() => {console.log("Failed to login.");});

  var username = args[0]
  if (username) {
    roblox.getIdFromUsername(username)
		.then(function(id) {
			roblox.getRankInGroup(groupId, id)
			.then(async function(rank) {
        let oldrole = await roblox.getRankNameInGroup(groupId, id)
				if(maximumRank <= rank) {
					message.channel.send(`${id} is rank ${rank} and not promotable.`)
				} else {
					roblox.setRank(groupId, id, rankchange)
		      .then(function(roles) {
						message.channel.send(`Set user ${username}'s rank from ${oldrole} to ${roles.newRole.Name}`)
						const embed = new Discord.RichEmbed()
							.setColor(0x8cff00)
							.setTimestamp()
							.setDescription(`**Action:** Rank\n**Target:** ${username}\n**User:** ${message.author.tag}\n**Old Rank:** ${oldrole}\n**New Rank:** ${roles.newRole.Name}`);
						staffc.send({embed});
					}).catch(function(err) {
						message.channel.send("Failed to set rank.")
					});
				}
			}).catch(function(err) {
				message.channel.send("Couldn't get them in the group.")
			});
		}).catch(function(err) { 
			message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
		});
  } else {
    message.channel.send("Please enter a username.")
  }
  return;
}