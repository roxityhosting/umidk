const Discord = require("discord.js");
var figlet = require('figlet');
const send = require("quick.hook");
module.exports.run = async (Discord, client, message, args) => {
  if(args.join(' ').length > 15) return message.channel.send('Only 15 characters admitted!')
  
  if(!args[0]) return message.channel.send('Please specify something to ascii!');
  
  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }

      message.channel.send('' + `${data}` + '', {code: 'AsciiArt'});
    
  });
}