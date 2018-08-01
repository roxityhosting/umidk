const Discord = require('discord.js'),
      db = require('quick.db');

exports.run = async (client, message, args, tools) => {
    let user = message.mentions.users.first() || message.author;
    let balance = await db.fetch(`userBalance_${user.id}`);
    if (balance === null) balance = 0; // Starting Balance
    const embed = new Discord.MessageEmbed()
    .setTitle('Bank')
    .setColor('#4AFF5F')
    .addField('Username', user.username, true)
    .addField('Balance', balance, true)
    message.channel.send(embed)
}