
exports.run = (Discord, client, message, args) => {
var list = client.guilds.array().sort();
console.log("```" + list + "```")
}
