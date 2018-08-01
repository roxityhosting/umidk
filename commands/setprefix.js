const db = require('quick.db')

exports.run = (Discord, client, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("This requires you to have an `Administraton` role in this server. If you believe this is a problem, contact a server administrator or contact our Support Team!")
    if (!args.join(" ")) return message.channel.send("__**Incorrect Usage**__\n**Correct Usage:** `setprefix <prefix>`!")
    
    db.set(`guildPrefix_${message.guild.id}`, args.join().trim()).then(i => {

        message.channel.send("**Prefix Changed To: **" + i)

    })

}
