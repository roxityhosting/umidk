
const Discord = require("discord.js");
const Client = require('fortnite');
const fortnite = new Client('948ac340-6e14-4d31-9a8c-49b01fa64178');

exports.run = async (Discord, client, message, args) => {
        message.delete(200);
        let username = args[0];
        let platform = args[1] || "pc";
        
        if(!username) return message.channel.send("Please specify a username")
        
        let data = fortnite.user(username, platform).then(data => {
        let stats = data.stats;
        let lifetime = stats.lifetime;
          
        let score = lifetime[6]['Score'];
        let mp = lifetime[7]['Matches Played'];
        let w = lifetime[8]['Wins'];
        let wper = lifetime[9]['Win%'];
        let ki = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];
          
        let embed = new Discord.RichEmbed()
        .setTitle(data.username + "'s stats")
        .setAuthor("iBot Fortnite Stats: Lifetime Stats")
        .setColor("#4286f4")
        .addField("Wins", w, true)
        .addField("Score", score ,true)
        .addField("Matches Played", mp, true)
        .addField("Kills", ki, true)
        .addField("Kill/Death", kd, true)
        .addField("Win %", wper, true)
        message.channel.send({embed});
               

});
}       
                                                          
                
