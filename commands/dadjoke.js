const discord = require ("discord.js");

exports.run = async (Discord, client, message, args) => {

	 let sa = require ("superagent");

    let {body} = await sa
    .get(`https://icanhazdadjoke.com/slack`);

    let o = new discord.RichEmbed()
        .setColor(0xFFFFFF)
        .setDescription("**" + body.attachments.map(a => a.text) + "**")
    message.channel.send(o)
	
}
