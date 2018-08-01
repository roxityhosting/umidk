exports.run = (Discord, client, message, args) => {
    
    let name = client.user.username;
    let thumbnail = client.user.avatarURL;

    
function doMagic8BallVoodoo() {
    var rand = [':fist: Rock', ' :raised_hand: Paper', ':v: Scissors'];

    return rand[Math.floor(Math.random()*rand.length)];
}
    const author = message.author;
		   const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR97vFExM4v0gktH18oMQRdT1NPNySjnyE4YPKWwg7NI_NznOPT")
           	   .setAuthor(name,thumbnail)
		   .setTitle(":fist: Rock, :raised_hand: Paper, :v: Scissors")
		   .addField("Result: ",doMagic8BallVoodoo())
		   .setFooter("Requested by " + author + " at ")
		   .setTimestamp()
		   message.channel.send(":8ball: from: " + author);
		   message.channel.send({embed})
    

}
