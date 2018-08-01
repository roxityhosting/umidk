

exports.run = (Discord, client, message, args) => {
var randomColor = Math.floor(Math.random() * 16777215).toString(16);
let name = client.user.username;
let thumbnail = client.user.avatarURL;
let colour1 = randomColor

    var embedinfo = new Discord.RichEmbed()
        .setFooter("© " + name + " | Made by Aaron#1742")
        .setAuthor(name,thumbnail)
        .setColor(colour1)
        .setTitle("Random Color")
        .setDescription("Result: " + colour1)
    message.channel.sendEmbed(embedinfo);
    

}
