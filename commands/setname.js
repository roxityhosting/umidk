exports.run = (Discord, client, message, args) => {
if (message.author.id === '399982462245011456') {
  const sayMessage = args.join(" ");
  client.user.setUsername(sayMessage);
  }
else {
  message.channel.send('You are not cool enough to run this command!')
  return;
  }
}
