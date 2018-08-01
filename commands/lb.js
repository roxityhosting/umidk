const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args, tools) => {

db.startsWith('balance_', { sort: '.data' }).then(i => {
  let lb1 = i[0].ID
  let lb2 = i[1].ID
  let lb3 = i[2].ID
  let lb4 = i[3].ID
  let lb5 = i[4].ID
  let lb6 = i[5].ID
  let lb7 = i[6].ID
  let lb8 = i[7].ID
  let lb9 = i[8].ID
  let lb10 = i[9].ID
  
  let id1 = lb1.slice(8)
  let id2 = lb2.slice(8)
  let id3 = lb3.slice(8)
  let id4 = lb4.slice(8)
  let id5 = lb5.slice(8)
  let id6 = lb6.slice(8)
  let id7 = lb7.slice(8)
  let id8 = lb8.slice(8)
  let id9 = lb9.slice(8)
  let id10 = lb10.slice(8)
  
  let name1 = client.users.get(id1)
  let name2 = client.users.get(id2)
  let name3 = client.users.get(id3)
  let name4 = client.users.get(id4)
  let name5 = client.users.get(id5)
  let name6 = client.users.get(id6)
  let name7 = client.users.get(id7)
  let name8 = client.users.get(id8)
  let name9 = client.users.get(id9)
  let name10 = client.users.get(id10)
  const embed = new Discord.RichEmbed()
    .setTitle('Bank Leaderboard')
    .setColor('RANDOM')
    .setDescription(`1. ${name1.tag} - $${i[0].data}\n2. ${name2.tag} - $${i[1].data}\n3. ${name3.tag} - $${i[2].data}\n4. ${name4.tag} - $${i[3].data}\n5. ${name5.tag} - $${i[4].data}\n6. ${name6.tag} - $${i[5].data}\n7. ${name7.tag} - $${i[6].data}\n8. ${name8.tag} - $${i[7].data}\n9. ${name9.tag} - $${i[8].data}\n10. ${name10.tag} - $${i[9].data}`)
      message.channel.send(embed)
})
} 
