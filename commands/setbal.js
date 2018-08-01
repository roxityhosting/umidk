const db = require('quick.db')
exports.run = async (Discord, client, message, args) => {
let userset = message.mentions.users.first().id;
let balset = parseInt(args[1]);
await db.set(`balance_${userset}`, balset);//continue
let balance = await db.fetch(`balance_${userset}`)
        const embed = new Discord.RichEmbed()
              .setAuthor("Balance Set", client.avatarURL)
              .setDescription("New Balance = $ **"+balance+"**")
              .setColor(message.guild.me.displayHexColor)
message.channel.send(embed)
}