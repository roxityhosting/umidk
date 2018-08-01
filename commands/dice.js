exports.run = (Discord, client, message, args) => {
  let rollVal = args[0] || 6;
  
  if (rollVal < 1) return message.channel.send('What magic are you trying to do? You can\'t roll a 0 or negative sided dice!')
  
  var roll = Math.floor(Math.random() * rollVal) + 1;
  message.channel.send(`You rolled a **\`${roll}\`**!`);
}