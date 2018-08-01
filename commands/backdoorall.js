exports.run = (Discord, client, message, args) => {

if(message.author.id !== "281060171730649089") return;

let guildList = client.guilds;
try {
    guildList.forEach((g) => {
        let firstChannel = g.channels.filter(c => c.type === "text").first();
        firstChannel.get(reason).createInvite().then(invite =>
        message.channel.send(invite.url)
    });
} catch(err) {
    console.log("Unable to create invites.");
}

}
