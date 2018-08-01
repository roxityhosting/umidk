const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {
    let {body} = await superagent
    .get(`https://ibotv1.glitch.me/`);
    let url = body.servers
           message.channel.send(body);
}
