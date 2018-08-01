var randomColor = Math.floor(Math.random() * 16777215).toString(16);
const Discord = require('discord.js');

exports.run = (Discord, client, message, args) => {
let name = client.user.username;
let thumbnail = client.user.avatarURL;
    var embedcmds = new Discord.RichEmbed()
        .setFooter("© " + name + "  | Made by Aaron#1742")
        .setAuthor(name + " commands",thumbnail)
        .setColor(randomColor)
        .setDescription("Below is a list of CMD categorys, say !cmds [number] to view commands for that category!\n**1.** Fun\n**2.** Economy\n**3.** Utility\n**4.** Music\n**5.** Moderation\n**6.** Administration\n**7.** Settings")
    
    var fun = new Discord.RichEmbed()
        .setFooter("© " + name + "  | Made by Aaron#1742")
        .setTitle("Fun Commands")
        .setColor("RANDOM")
        .addField("8Ball [question]", "8ball will respond with your destiny")
        .addField("Randomcolor", "Produces a randomly generated color")
        .addField("Cointoss", "Tosses a coin")
        .addField("Avatar [@user]", "Shows the tagged users avatar")
        .addField("Cat", "Shows a cute cat pic")
        .addField("Catfact", "Tells you a fact about cats")
        .addField("Dogfact", "Tells you a fact about dogs")
        .addField("Gif [search]", "Searches giphy and responds with a gif")
        .addField("Quiz", "Starts a quiz")
        .addField("Flip", "Flips your text")
        .addField("Dadjoke", "Responds with a dadjoke")
        .addField("Trump", "Responds with a trump quote")
        .addField("Fortnite [username]", "Shows fortnite stats for the specified user")
    
     var utility = new Discord.RichEmbed()
        .setFooter("© " + name + "  | Made by Aaron#1742")
        .setTitle("Utility Commands")
        .setColor("RANDOM")
        .addField("Weather [city]", "Shows the weather for the specified city")
        .addField("Translate [lang] [text]", "Translates using google translate")
        .addField("Math [equasion]", "A handy calculator")
        .addField("Stats", "Shows some interesting bot stats")
        .addField("AFK", "Will respond saying you're afk if someone tags you")
        .addField("Report", "Will report your quiery to server admins")
     
     var eco = new Discord.RichEmbed()
        .setFooter("© " + name + "  | Made by Aaron#1742")
        .setTitle("Economy Commands")
        .setColor("RANDOM")
        .addField("Bal", "Shows your balance, opens an account if you don't have one already")
        .addField("Daily", "Gives you $200 each day when you use it")
        .addField("Work", "Earn money by working once per hour")
        .addField("Crime", "	Commit a crime, either earn money or face a fine!")
     
      var music = new Discord.RichEmbed()
        .setFooter("© " + name + "  | Made by Aaron#1742")
        .setTitle("Music Commands")
        .setColor("RANDOM")
        .addField("Play [song name]", "Plays a song")
        .addField("Skip", "Skips a song")
        .addField("Pause", "Pauses a song")
        .addField("Resume", "Resumes a song which is paused")
        .addField("Dc", "Disconects from the voice channel")
      
       var mod = new Discord.RichEmbed()
        .setFooter("© " + name + "  | Made by Aaron#1742")
        .setTitle("Moderation Commands")
        .setColor("RANDOM")
        .addField("Kick [@user] (reason)", "Kicks a user")
        .addField("Ban [@user] (reason)", "Bans a user")
        .addField("Sban [@user] (reason)", "SoftBans a user")
        .addField("Warn [@user] (reason)", "Warns a user")
        .addField("Warnings [@user]", "Shows the warnings of a user")
        .addField("Modlist", "Shows avalible server moderators")
        .addField("Mute [@user] (time)", "Mutes a user for a specified amount of time")
     
    var admin = new Discord.RichEmbed()
        .setFooter("© " + name + "  | Made by Aaron#1742")
        .setTitle("Admin Commands")
        .setColor("RANDOM")
        .addField("Say", "The bot says what you ask it to say, well duh.")
        .addField("Addrole [@user] [role]", "Adds the role to the specified user.")
        .addField("Removerole [@user] [role]", "Removes the role from the specified user.")
        .addField("Lockdown (time)", "Prevents all users from being able to type in the channel")
        .addField("Announce [TITLE] [DESCRIPTION]", "Announces whatever you put in the channel you write it in.")
        .addField("Eannounce [TITLE] [DESCRIPTION]", "Announces whatever you put in the channel you write it in, also tags everyone.")
    
    var settings = new Discord.RichEmbed()
        .setFooter("© " + name + "  | Made by Aaron#1742")
        .setTitle("Settings Commands")
        .setColor("RANDOM")
        .addField("Setprefix [prefix]", "Sets the server prefix")
        .addField("Autorole [@role]", "Will role all new users with the specified role")
        .addField("Removeautorole", "Removes the autorole")

    let title = args[0];
    
       if (title == "1") {
			message.channel.send(fun)
		  } else if (title == "2"){
			message.channel.send(eco)
		   } else if (title == "3"){
			message.channel.send(utility)
		   } else if (title == "4"){
			message.channel.send(music)
		   } else if (title == "5"){
      message.channel.send(mod)
       } else if (title == "6"){
      message.channel.send(admin)
       } else if (title == "7"){
			message.channel.send(settings)
		   } else {
			message.channel.send(embedcmds)
		   }
}
