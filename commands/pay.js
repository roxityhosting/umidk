const db = require('quick.db')
exports.run = async (Discord, client, message, args) => {
let user = message.mentions.users.first()
let balance = await db.fetch(`balance_${user.id}`)
if (balance === null) await db.set(`balance_${user.id}`, 0);
let money = parseInt(args[0])
   db.subtract(`balance_${message.author.id}`, money)
   db.add(`balance_${user.id}`, money).then (i => {
        const embed = new Discord.RichEmbed()
              .setAuthor("Money Paid To " + user.tag)
              .setDescription(`Your balance is ${balance} and their's is ${i}`)
              .setColor("#83b1fc")
        message.channel.send(embed)
        })

}
