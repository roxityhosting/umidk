exports.run = (Discord, client, message, args) => {
let thumbnail = client.user.avatarURL;
let name = client.user.username;
function coinToss() {
    var rand = ['You flipped the coin, it lands on tails.', 'I flipped the coin, it lands on tails.', 'You flipped the coin, it lands on heads.', 'I flipped the coin, it lands on heads.'];
    return rand[Math.floor(Math.random()*rand.length)];
}
const author = message.author;
		   const embed = new Discord.RichEmbed()
		   .setColor(message.guild.me.displayHexColor)
		   .setThumbnail("https://vignette.wikia.nocookie.net/mariokart/images/d/dc/Coin_-_Mario_Kart_Wii.png/revision/latest?cb=20170719161622")
           	   .setAuthor(name,thumbnail)
		   .setTitle("Coin Toss")
		   .addField("Result: ",coinToss())
		   .setFooter("Requested by " + author + " at ")
		   .setTimestamp()
		   message.channel.send("Cointoss from: " + author);
		   message.channel.send({embed})
    
}
