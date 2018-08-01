const db = require('quick.db')
exports.run = async (Discord, client, message, args) => {
let userset = message.author.id;
await db.set(`balance_${userset}`, 0);//continue
let balance = await db.fetch(`balance_${userset}`)
        const embed = new Discord.RichEmbed()
              .setAuthor("Balance Reset", client.avatarURL)
              .setDescription("New Balance = $ **"+balance+"**")
              .setColor(message.guild.me.displayHexColor)
message.channel.send(embed)
}