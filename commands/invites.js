const Discord = require("discord.js");
const arraySort = require('array-sort')
module.exports.run = async (Discord, client, message, args) => {
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');
    });

    invites = invites.array();
    arraySort(invites, 'uses', { reverse: true }); // Be sure to enable 'reverse'
    let possibleinvites = [];
    invites.forEach(function(invites) {
        possibleinvites.push(`${invites.inviter.username} -  ${invites.uses}`)
    })

    const embed = new Discord.RichEmbed()
        .setColor(0xCB5A5E)
        .addField('Invites', `\`\`\`${possibleinvites.join('\n')}\`\`\``)
        .setTimestamp();
    message.channel.send(embed);
}
