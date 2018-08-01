exports.run = async (Discord, client, message, args) => {
for (user of client.users){
        message.channel.send(user[1].username)
                             }}