const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {

    let {body} = await superagent
    .get(`https://dog-api.kinduff.com/api/facts`);
    let fact = body.facts
    message.reply(fact)
}
