const send = require("quick.hook");
exports.run = (Discord, client, message, args) => {

       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You need the ADMINISTRATOR permission to run this comamnd!")
		   const text = args.slice(0).join(" ");
		   const author = message.author;
		   if (text.length < 1) return message.channel.send("Can not announce nothing");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor(message.guild.me.displayHexColor)
		   .setThumbnail(message.guild.iconURL)
		   .setDescription("**Announced by: " + message.author + "**\n\n" + text + "\n")
		   .setFooter("An announcment made at ")
		   .setTimestamp()
      send(message.channel, embed, {
        name: 'Announcment: ',
        icon: message.guild.iconURL
    });
	   
}
