////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const { MessageEmbed } = require("discord.js");
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
 async canModifyQueue(member) {
    //define the EMBED
    let resultsEmbed = new MessageEmbed()
      .setTitle("<a:882976532161790013:955522901459750932> | You must be in the Same Voice Channel as me!")
      .setColor("RANDOM")
    //wenn memberchannel nicht der botchannel ist
    if (member.voice.channel !== member.guild.me.voice.channel) {
    //Send the message to the MEMBER
      member.send(resultsEmbed);
      //return false that it ends the command
      return false;
    }
    //return true that it continues the command
    return true;
  }
};
