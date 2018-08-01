const send = require("quick.hook");
exports.run = (Discord, client, message, args) => {
let messageauthortag = message.author.tag
let question = args.slice(0).join(" ");
let author = message.author
function doMagic8BallVoodoo() {
    var rand = [':8ball: It is certain',':8ball: As I see it, yes',':8ball: It is decidedly so',':8ball: Without a doubt',':8ball: Yes definitely',':8ball: You may rely on it',':8ball: Most Likely',':8ball: Outlook good',':8ball: Yes',':8ball: Signs point to yes',':8ball: Reply hazy try again',':8ball: Ask again later',':8ball: Better not tell you now',':8ball: Cannot predict now',':8ball: Concentrate and ask again',':8ball: Do not count on it',':8ball: My reply is no',':8ball: My sources say no',':8ball: Outlook not so good',':8ball: Very doubtful'];

    return rand[Math.floor(Math.random()*rand.length)];
}
	
	if (args.slice(0).join(" ").length < 1) 
	return message.reply('Please ask 8ball a yes/no question.');
	

		   const embed = new Discord.RichEmbed()
		   .setColor(message.guild.me.displayHexColor)
		   .setThumbnail("https://pbs.twimg.com/profile_images/178167256/8ball.jpg.jpeg")
		   .setTitle("Magic 8 ball :8ball:")
		   .setDescription(`**${author.tag} Asked:**\n${question}`)
		   .addField("Result:",doMagic8BallVoodoo())
		   .setFooter("Requested by " + message.author.tag + " at ")
		   .setTimestamp()
		   send(message.channel, embed, {
        name: message.guild.name,
        icon: message.guild.iconURL
    });

		   message.delete(3000)
	if (message.author.bot) {
         message.delete(5000)
}
    
}
