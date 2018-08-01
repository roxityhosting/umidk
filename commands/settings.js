const db = require('quick.db')
exports.run = async (Discord, client, message, args) => {
const autoroles = new db.table('Autoroles');
let guildid = message.guild.id;
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No can do pal!, ADMINISTRATOR is needed.");
let prefix = await db.fetch(`guildPrefix_${guildid}`)
let autorole = await autoroles.fetch(`Autorole_${message.guild.id}`, { target: '.role' })
let embed = new Discord.RichEmbed()
        .setTitle(`${message.guild.name}'s Settings`)
        .setDescription("Edit settings by saying " + prefix + "cmds 7")
        .addField("Prefix", prefix, true)
        .addField("Autorole", autorole, true)
        .setColor('RANDOM')
        message.channel.send(embed)
}
