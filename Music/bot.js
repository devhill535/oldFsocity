 const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "bot",
  aliases: ["b"],
  cooldown: 6,
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
   .setTitle(`**Info ITuneR**`)
   
    
    .addField("`My name`", `**ITuneR#9298**`, true)

    .addField("`My ID`",  `**954070757472890890**`, true)
    
    .addField( "`My Prefix` ",`**+**`,true)
    
    .addField("`Node.js Version`",  `**12**`, true)
    
    .addField("`Language Program`",  `**Java Script**`, true)
    
    .addField("`Discord.js `",  `**12.5.1**`, true)
    
    .addField( "`Developer bot` ",`<@622509869546602506>`,true)
    
   
    
   
   
    .setDescription(`
\`ONLINE BOT\`
`)
    
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);

  }
};
