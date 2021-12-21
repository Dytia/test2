module.exports = {
    name: 'help',
    execute(message, args){
        const Discord = require('discord.js');
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#fb00ff')
        .setTitle('Commands')
        .setDescription('Most of the commands:')
        .addFields(
            { name: 'prefix is:!-', value: '\u200B'},
            { name: 'ping', value: '\u200B'},
            { name: 'exponential', value: 'For a graph'},
            { name: 'help', value: '\u200B'}
        )
        .setTimestamp()
        message.channel.send(exampleEmbed);
    }
}