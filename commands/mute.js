const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (Discord, client, message, args) => {
    let staffc = message.guild.channels.find("name", "logs")
    if (!staffc) return message.channel.send("I can not find the log channel. For logs, get the sever admin to make a channel called `logs`.");
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but you do not have valid permissions! If you beleive this is a error, contact an owner.");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Couldn't find user.");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("The user you are trying to mute is either the same, or higher role than you.");
    let muterole = message.guild.roles.find(`name`, "Muted");

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];
    if (!mutetime) return message.reply("You didn't specify a time!");

    await (tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);
      const embed = new Discord.RichEmbed()
            .setColor(0x8cff00)
            .setTimestamp()
            .setDescription(`**Action:** Mute\n**Target:** ${tomute}\n**Moderator:** ${message.author.tag}\n**Length:** ${ms(ms(mutetime))}`);
        staffc.send({embed});
        message.tomute.send(`You have been muted for **${ms(ms(mutetime))}** by ${message.author.tag}`);

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> has been unmuted!`);
    }, ms(mutetime));

}
