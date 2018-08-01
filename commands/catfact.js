

const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {

    let {body} = await superagent
    .get(`https://catfact.ninja/fact`);
    let fact = body.fact
    message.reply(fact)
}
