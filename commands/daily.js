const db = require('quick.db');
const ms = require('parse-ms');
const timelimit = 8.64e+7;
const timelimitdata = new db.table('DailyTime');
exports.run = async (Discord, client, message, args) => {
let previousDaily = await timelimitdata.fetch(`previousDaily_${message.author.id}`);
let cooldowntime = ms(timelimit - (Date.now() - previousDaily));
if (previousDaily !== null && timelimit - (Date.now() - previousDaily) > 0) {
  return message.channel.send(`You've collected your daily. Come back in ${cooldowntime.hours} hours ${cooldowntime.minutes} minutes ${cooldowntime.seconds} seconds !`)
} else if (timelimit - (Date.now() - previousDaily) <= 0) {
timelimitdata.set(`previousDaily_${message.author.id}`, Date.now())
let user = message.author;
let balance = await db.fetch(`balance_${user.id}`)
if (balance === null) await db.set(`balance_${user.id}`, 0);
   db.add(`balance_${user.id}`, 200).then (async i => {
     let balance2 = await db.fetch(`balance_${user.id}`)
        const embed = new Discord.RichEmbed()
              .setDescription(`You collected your daily bonus. Come back tomorrow`)
              .setColor(message.guild.me.displayHexColor)
              .setFooter("New Balance: " + balance2)
        message.channel.send(embed)
        })
}

}

