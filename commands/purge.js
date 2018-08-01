exports.run = (Discord, client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
        if (isNaN(args[0])) return message.channel.send("**Please Supply a Valid Number!**");
        if (args[0] > 100) return message.channel.send("**In a single purge, there is a max of 100 messages.**");

        message.channel.bulkDelete(args[0])
        .then ( messages => message.channel.send(`**Successfully Deleted \`${messages.size}/${args[0]}\` messages.**`)
        .then(message => {
            message.delete(10000)
          }))

}
