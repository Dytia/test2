module.exports = {
    name: 'hug',
    description: "this is a hug command!",
    execute(message, args){
        setTimeout(() => message.delete(), 1000);
        const Discord = require('discord.js');
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#fb00ff')
        .setImage('https://cdn.discordapp.com/attachments/846479326660657212/922854010917109820/RDT_20211220_2252571006427794027197065.gif')
        message.channel.send(exampleEmbed);
    }
}