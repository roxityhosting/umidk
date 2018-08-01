annconst Discord = require('discord.js');
const db = require('quick.db');
const quiz = [
  { q: "What color is the sky?", a: ["no color", "invisible"] },
  { q: "Name a soft drink brand.", a: ["pepsi", "coke", "rc", "7up", "sprite", "mountain dew"] },
  { q: "Name a programming language.", a: ["actionscript", "coffeescript", "c", "c++", "basic", "python", "perl", "javascript", "dotnet", "lua", "crystal", "go", "d", "php", "ruby", "rust", "dart", "java", "javascript"] },
  { q: "Who's a good boy?", a: ["aaron", "aaronnsmh"] },
  { q: "Who created me?", a: ["aaron", "aaronnsmh"] },
  { q: "What programming language am I made in?", a: ["javascript",] },
  { q: "Name the seventh planet from the Sun.", a: ["uranus"] },
  { q: "Name the World's biggest island.", a: ["greenland",] },
  { q: "What's the World's longest river?", a: ["amazon", "amazon river"] },
{ q: "Name the World's largest ocean.", a: ["pacific", "pacific ocean"] },
  { q: "Name one of the three primary colors.", a: ["blue", "red", "yellow"] },
  { q: "How many colors are there in a rainbow?", a: ["7", "seven"] },
  { q: "What do you call a time span of one thousand years?", a: ["millennium"] },
  { q: "How many squares are there on a chess board?", a: ["64", "sixty four"] },
  { q: "How many degrees are found in a circle?", a: ["360", "360 degrees", "three hundred sixty"] },
  { q: "The Dewey Decimal system is used to categorize what?", a: ["books"] },
  { q: "How many points does a compass have?", a: ["32", "thirty two"] },
  { q: "How many strings does a cello have?", a: ["4", "four"] },
  { q: "How many symphonies did Beethoven compose?", a: ["9", "nine"] },
  { q: "How many lines should a limerick have?", a: ["5", "five"] },
  { q: "What is the most basic language Microsoft made?", a: ["visual basic"] },
  { q: "What is the most complicated language?", a: ["binary"] },
  { q: "'OS' computer abbreviation usually means?", a: ["operating system"] },
  { q: "Where is the hottest place on Earth?", a: ["ethiopia"] },
  { q: "What is the next prime number after 3?", a: ["5"] },
  { q: "How many miles is the diameter of Earth?", a: ["8000"] },
  { q: "Which country is Prague in?", a: ["czech republic"] },
  { q: "Which instrument has forty-seven strings and seven pedals?", a: ["harp"] },
  { q: "Which sea creature has three hearts?", a: ["octopus"] },
  { q: "How many bones does an adult human have?", a: ["206"] },
  { q: "How many pedals do most modern pianos have?", a: ["3"] },
  { q: "Water boils at 212 degrees on which temperature scale?", a: ["fahrenheit"] },
 { q: "What is the Italian word for pie?", a: ["pizza"] },
 { q: "What is the national flower of Wales?", a: ["daffodil"] },
 { q: "Name the port of Rome.", a: ["ostia"] },
 { q: "What is one quarter of 1,000?", a: ["250"] },
 { q: "Who invented the bikini?", a: ["louis reard"] },
 { q: "When did the French Revolution end?", a: ["1799"] },
 { q: "Which ocean surrounds the Maldives?", a: ["Indian Ocean"] },
 { q: "Which summer desert is often eaten during Wimbledon's tennis matches?", a: ["strawberries and cream"] },
 { q: "Which planet shares its name with a dog?", a: ["pluto"] },
 { q: "Which is the longest bone in the human body?", a: ["femur"] },
 { q: "What name is given to a quarter of a circle?", a: ["quadrant"] }
];
const options = {
  max: 1,
  time: 30050,
  errors: ["time"],
};

exports.run = async (Discord, client, message, args) => {
  const quiz = new db.table('quiz');
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q);
  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor(`Winner: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                 .setTitle(`Correct Answer: \`${winnerMessage.content}\``)
                                 .setFooter(`Question: ${item.q}`)
                                 .setColor(message.guild.me.displayHexColor)
                                })
  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor('No one got the answer in time!')
                                 .setTitle(`Correct Answer(s): \`${item.a}\``)
                                 .setFooter(`Question: ${item.q}`)
                                })
  }
}
module.exports.help = {
name: "quiz"
}
