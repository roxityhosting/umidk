const Discord = require('discord.js');
const arraySort = require('array-sort');
const table = require('table');
const send = require("quick.hook");

exports.run = async (Discord, client, message, args) => {

    let ban = await message.guild.fetchBans().catch(error => {
        return message.channel.send('Sorry, I don\'t have the proper permissions to view bans!');
    });

    ban = ban.array();
    let users = message.guild.fetchBans().id;

    arraySort(ban, 'size', {
        reverse: true
    });

    let possiblebans = [
        ['Users', 'ID']
    ];
    ban.forEach(function(ban) {
        possiblebans.push([ban.username, ban.id]);
    })

    const embed = new Discord.RichEmbed()
        .setColor('BLUE')
        .addField('Bans', `\`\`\`${table.table(possiblebans)}\`\`\``);
    send(message.channel, embed, {
        name: 'Ban List',
        icon: 'https://images.discordapp.net/avatars/383658506060038144/22d3e5383e5e0a058cc01a0261472781.png?size=512'
    });
};