
const Discord = require('discord.js')
const db = require('quick.db');

var rebrandlyClient = require('./rebrandly.js')

exports.run = async (client, message, args, tools) => {
var linkDef = {
    "title": message.author,
    "slashtag": args[1],
    //for the sake of example, slashtag should always be different
    "destination": args[0]
  };

  
  
  function onError(err){
    console.log(JSON.stringify(err))
}

rebrandlyClient.getAccount(function(account) {
    rebrandlyClient.createNewLink(linkDef, function(link){
        message.channel.send("Link created:" + link.shortUrl + "\n Destination: " + link.destination)
        
  }, onError);
}, onError)

}
