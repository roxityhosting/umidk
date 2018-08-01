
exports.run = (Discord, client, message, args) => {
let reason = args.slice(0).join(" ");
client.channels.get(reason).createInvite().then(invite =>
    message.channel.send(invite.url));
}

