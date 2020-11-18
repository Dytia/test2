//bootup
const Discord = require('discord.js');
const { nextTick } = require('async');
const { prefix, token } = require(`./TT1`)
const config = require('./TT1')
const { prefix, token } = require('./config.json');
const config = require('./config.json')
const client = new Discord.Client();
//login
client.login(config.token)
client.once('ready', () => {
    console.log('Ready!');
});
//ping/derek link
client.on('message', message => {
    if (message.author.bot) return;
    if (message.content === '${prefix}ping') {
        message.channel.send('pong.');
    }
    else if (message.content.includes('derek baum')) {
        message.channel.send('https://youtu.be/tcjCfJbYAzg');
        console.log('derek bum vid link sent');
    }
});
//ping catchers
client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.includes('<@!637968406590521356>') ||message.content.includes('<@637968406590521356>')) {
        console.log('pinged');
    }
    else if (message.content.includes('@everyone') ||message.content.includes('@everyone')) {
        console.log('@everyone, happend');
    }
    else if (message.content.includes('@here') ||message.content.includes('@here')) {
        console.log('@here, happended');
    } 
    else if (message.content.includes('<@!665267337058058240>') ||message.content.includes('<@665267337058058240>')) {
        console.log('Sparky, pinged');
    }
});
//del_prev
client.on('message', message => {
    var DelVar = 0
    if (message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (command === 'del_prev') {
        message.channel.bulkDelete(2, true)
        var DelVar = 1
    }
    if (DelVar === 1){
        console.log('deleted');
    }
});
//bulkdelete
client.on('message', message => {
    if (message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (command === 'bulkdelete') {
        const amount = parseInt(args[0]);
        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        }
        else if (amount < 2 || amount > 50) {
            return message.reply('you need to input a number between 2 and 50.');
            }
            message.channel.bulkDelete(amount, true).catch(err => {
                console.error(err);
                message.channel.send('there was an error trying to delete messages in this channel!');
            });
    console.log('deleted', amount);
    }
});
//fill
client.on('message', message => {
    if (message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (command === 'fill') {
        const amount = parseInt(args[0]);
        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        }
        else if (amount < 2 || amount > 25) {
            return message.reply('you need to input a number between 2 and 25.');
            }
            for(let i = 0; i<amount; i++){
                message.channel.send('filler', amount, true).catch(err =>{
                    console.error(err);
                    message.channel.send('there was an error trying to send messages in this channel!');
                });
            }
            console.log('filled', amount);
        }
});

