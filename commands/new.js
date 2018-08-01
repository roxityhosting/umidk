const Discord = require("discord.js");


module.exports.run = async (Discord, client, message, args) => {

  const reason = message.content.split (" ").slice(1).join(" ");
if (!message.guild.roles.exists("name", "Support")) return message.channel.send(`This server doesn't have a **Support **Role, please ask a server admin to make one!`);
if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
message.guild.createChannel(`ticket-${message.author.id}`, "text").then (c => {
  let parent = message.guild.channels.find(c => c.name == "tickets");
  if (!parent) {
    message.channel.send("Please create a category called **tickets**")
    return;
  }
  c.setParent(parent);
  let role = message.guild.roles.find("name", "Support");
  let role2 = message.guild.roles.find("name", "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      })
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      })
      c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      })
      message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
      const embed = new Discord.RichEmbed()
        .setColor("random")
        .addField(`Hey ${message.author.username}!`, `Please try to explain why you opened this ticket with as much detail as possible. Our **Support Team** will be here soon to help.`)
        .addField(`Reason`, reason || `No reason specified`)
        .setFooter(`Say !close to close this ticket`)
        .setTimestamp()
        c.send(`<@${message.author.id}>`)
        c.send ({ embed: embed });
      }).catch(console.error);

}