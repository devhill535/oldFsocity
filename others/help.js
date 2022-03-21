const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/attachments/938824959625662554/955523441107300402/music-logo-design.jpg`)
    .setTitle(`**ITuneR Commands**`)
    .setDescription(`
**🔰┊Info Commands**
invite ,support ,about ,ping ,uptime ,bot
**🎵┊Music Commands**
play , skip , skipto , stop , volume , nowplaying , shuffle , search , resume ,
remove , queue , filter , loop , lyrics
**🔗┊Links**
[Support](https://discord.gg/vCyZr3vyjY) - [Invite](https://discord.com/api/oauth2/authorize?client_id=954070757472890890&permissions=8&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
