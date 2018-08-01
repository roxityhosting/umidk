exports.run = async (Discord, client, message, args, tools) => {

if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Sorry, but you do not have valid permissions! If you beleive this is a error, contact an owner.**");
            var rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!rUser) return message.channel.send("**Couldn't find user.**");
            var rreason = args.join(" ").slice(22);
            if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.channel.send('**I do not have the correct permissions.**').catch(console.error)

            var reportEmbed = new Discord.RichEmbed()
                .setDescription("Reports")
                .setColor("#ffffff")
                .addField("•Reported User", `${rUser} with ID: ${rUser.id}`)
                .addField("•Reported By", `${message.author} with ID: ${message.author.id}`)
                .addField("•Channel", message.channel)
                .addField("•Time", message.createdAt)
                .addField("•Reason", rreason);

            var reportschannel = message.guild.channels.find(`name`, "logs");
            if (!reportschannel) return message.channel.send("**Can't find logs channel.**");


            message.delete().catch(O_o => { });
            reportschannel.send(reportEmbed);
}