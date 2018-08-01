const Discord = require('discord.js')
const db = require('quick.db');
const ms = require('parse-ms');

exports.run = async (Discord, client, message, args, tools) => { 

 let userid = client.users.get(args[0])
let str = `<@${userid}>`; 
let id = str.replace(/[<@!>]/g, '');
try {
  const msg = new Discord.RichEmbed()
     .setThumbnail(message.author.displayAvatartURL) 
     .setColor('RANDOM') 
     .setTitle('You received a message :mailbox_with_mail:')
     .setThumbnail(message.author.displayAvatarURL)
     .addField('Author', message.author.username) 
     .addField('Message', args.slice(1).join(' ')) 
const user = await client.fetchUser(id);
await user.send(msg)

message.channel.send('I have sent this message to ' + '**' + userid.tag + '**')
} catch (err) {
return message.channel.send(`**${userid.username}** disabled their DMs so I cannot send this message to them`);
}
  
  }


exports.help = {
    name: 'DM',
    description: 'DMs a user with your message you want to DM',
    usage: '!dm <userid> <message>'
};