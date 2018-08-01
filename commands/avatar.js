var randomColor = Math.floor(Math.random() * 16777215).toString(16);
const send = require("quick.hook");
exports.run = (Discord, client, message, args) => {
if(message.mentions.users.first()) { //Check if the message has a mention in it.
          let user = message.mentions.users.first(); //Since message.mentions.users returns a collection; we must use the first() method to get the first in the collection.
          let output = "Avatar URL: " + user.avatarURL;
          let avatarurl = user.avatarURL;
          let thumbnail = message.guild.iconURL;
          let author = message.author;
    
          const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setThumbnail(thumbnail)
		   .setTitle(":frame_photo: Avatar")
		   .setImage(avatarurl)
		   .setFooter("Requested by " + author.tag + " at ")
		   .setTimestamp()
		   send(message.channel, embed, {
        name: message.guild.name,
        icon: message.guild.iconURL
    });
          
    } else {
          send(message.channel, "Please tag a user!", {
        name: message.guild.name,
        icon: message.guild.iconURL
    });
    }
}
