const db = require('quick.db');
const ms = require('parse-ms');
const timelimit = 1.8e+6;
const timelimitdata = new db.table('CrimeTime');
exports.run = async (Discord, client, message, args) => {
let previousDaily = await timelimitdata.fetch(`previousDaily_${message.author.id}`);
let cooldowntime = ms(timelimit - (Date.now() - previousDaily));
if (previousDaily !== null && timelimit - (Date.now() - previousDaily) > 0) {
  return message.channel.send(`You've already worked this hour. Come back in ${cooldowntime.minutes} minutes ${cooldowntime.seconds} seconds !`)
} else if (timelimit - (Date.now() - previousDaily) <= 0) {
timelimitdata.set(`previousDaily_${message.author.id}`, Date.now())

  function scenes() {
    var rand = ['You robbed the bank and came out with $500','You broke into the Queens house and stole $100','You tried to rob the bank, but were caught by the coppers, pay a $800 fine','You tried to rob the Queen but were caught, pay a $500 fine'];
    return rand[Math.floor(Math.random()*rand.length)];
}
let result = scenes()
if (result === 'You robbed the bank and came out with $500') {
db.add(`balance_${message.author.id}`, 500)
  const embed = new Discord.RichEmbed()
      .setDescription(result)
      .setColor("#83b1fc")
message.channel.send(embed)
}
else if (result === 'You broke into the Queens house and stole $100') {
db.add(`balance_${message.author.id}`, 100)
  const embed = new Discord.RichEmbed()
      .setDescription(result)
      .setColor("#83b1fc")
  message.channel.send(embed)
} else if (result === 'You tried to rob the bank, but were caught by the coppers, pay a $800 fine') {
db.subtract(`balance_${message.author.id}`, 800)
  const embed = new Discord.RichEmbed()
      .setColor("#83b1fc")
      .setDescription(result);
      
  message.channel.send(embed)
} else if (result === 'You tried to rob the Queen but were caught, pay a $500 fine') {
db.subtract(`balance_${message.author.id}`, 500)
  const embed = new Discord.RichEmbed()
      .setDescription(result)
      .setColor("#83b1fc");
  message.channel.send(embed)
}
}
}