module.exports = {
    name: 'exponential',
    execute(message, args){
        const Discord = require('discord.js');
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#fb00ff')
        .setTitle('Exponential growth or Exponetial decay')
        .setDescription('Bots like MEE6 have an Exponential growth XP system where every level is double. The last and a radioactive elements are an example of exponential decay where the half life is the rate of decay')
        .setImage('https://i.imgur.com/eEf5bBu.jpg')
        .setTimestamp()
        message.channel.send(exampleEmbed);
    }
}