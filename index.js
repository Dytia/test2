//bootup
const Discord = require('discord.js');
const async = require('async');
const token = process.env['token']
const client = new Discord.Client();
const fs = require('fs');
const prefix = "!-"
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.login(token)
client.once('ready', () => {
    console.log('Ready!');
client.user.setActivity('in beta');
});
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
    if(command === 'Kitchen gun') {
        client.commands.get('Derek').execute(message, args);
    }
    if(command === 'delete') {
        client.commands.get('delete').execute(message, args);
    }
    /*if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    }
    if (command === 'fill') {
        client.commands.get('fill').execute(message, args);
    }*/
    if (command === 'exponential'){
        client.commands.get('exponential').execute(message, args);
    }
    if (command === 'help'){
        client.commands.get('help').execute(message, args);
    }
});

//const { Permissions } = require('discord.js');
//ADMINISTRATOR