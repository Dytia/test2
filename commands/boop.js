module.exports = {
    name: 'boop',
    description: "this is a boop command!",
    execute(message, args){
        setTimeout(() => message.delete(), 1000);
        const Discord = require('discord.js');
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#fb00ff')
        .setImage('https://cdn.discordapp.com/attachments/846479326660657212/922855991500996618/RDT_20211220_225347584123282254938836.gif')
        message.channel.send(exampleEmbed);
    }
}