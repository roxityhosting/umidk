const Discord = require("discord.js");

const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const used = process.memoryUsage().heapUsed / 1024 / 1024;
  
    module.exports.run = async (Discord, client, message, args) => {
        let cpuLol;
        cpuStat.usagePercent(function(err, percent, seconds) {
          if (err) {
            return console.log(err);
          }
          
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  let bicon = client.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
    .setTitle("*** Stats ***")
    .setColor(message.guild.me.displayHexColor)
    .addField("Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
    .addField("Uptime ", `${duration}`, true)
    .addField("Users", `${client.users.size.toLocaleString()}`, true)
    .addField("Servers", `${client.guilds.size.toLocaleString()}`, true)
    .addField("Channels ", `${client.channels.size.toLocaleString()}`, true)
    .addField("Discord.js", `v${version}`, true)
    .addField("Node", `${process.version}`, true)
    .addField("CPU usage", `${percent.toFixed(2)}%`,true)
    .setThumbnail(bicon)
            
        return message.channel.send(botembed);
      
    });
};