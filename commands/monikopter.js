module.exports = {
    name: 'monikopter',
    description: "this is a fun, monikopter command!",
    execute(message, args){
        setTimeout(() => message.delete(), 1000);
        const Discord = require('discord.js');
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#fb00ff')
        .setImage('https://cdn.discordapp.com/attachments/846479326660657212/920677654615715870/test.gif')
        message.channel.send(exampleEmbed);
    }
}