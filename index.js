//bootup
const Discord = require('discord.js');
const async = require('async');
const { token } = require('./config.json');
const client = new Discord.Client();
const fs = require('fs');
const prefix = "!-"
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

const { Permissions, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');


for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.login(token)
client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('Hi Cutie <3');
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
    if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    }
    if (command === 'fill') {
        client.commands.get('fill').execute(message, args);
    }
    if (command === 'exponential'){
        client.commands.get('exponential').execute(message, args);
    }
    if (command === 'help'){
        if (member.Permission.has([Permissions.FLAGS.KICK_MEMBERS, Permissions.FLAGS.BAN_MEMBERS])) {
            client.commands.get('helpA').execute(message, args);
        }
        else {
            client.commands.get('help').execute(message, args);
        }
    }
});

/*
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
	if (command === 'pong') {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
			);

		message.reply({ content: 'Pong!x', components: [row] });
	}
});
*/