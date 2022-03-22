const {  MessageEmbed } = require("discord.js");

module.exports = {
 async  attentionembed(message, titel) {

    try{
      await message.reactions.removeAll();
       await message.react("<a:778566105252888576:955522901828853840>");
      }catch{
        }

    let resultsEmbed = new MessageEmbed()
      .setTitle("<a:778566105252888576:955522901828853840> | " + titel)
      .setColor("RANDOM")
      
      message.channel.send(resultsEmbed);
    return;

  }
};
