

const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {

    let {body} = await superagent
    .get(`http://api.adviceslip.com/advice`);
    let fact = body.slip
    message.reply(fact)
}
