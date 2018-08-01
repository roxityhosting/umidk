const db = require('quick.db')
exports.run = (Discord, client, message, args) => {
db.fetch(`RobloxProfile_${message.guild.id}`, { target: '.username' }).then(i => {
    message.channel.send(i);
})
}
