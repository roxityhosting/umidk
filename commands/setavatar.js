exports.run = (Discord, client, message, args) => {
if (message.author.id === '281060171730649089') {
  const sayMessage = args.join(" ");
  client.user.setAvatar(sayMessage);
  }
else {
  message.channel.send('You are not cool enough to run this command!')
  return;
  }
}
