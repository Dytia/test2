/*module.exports = {
    name: 'fill',
    aliases: ['f', 'cl'],
    description: "fills up to 50 messages",
    async execute(client, message, args){
        if(!args[0]) return message.reply("Please enter the amount of messages you want to delete.");
        if(isNaN(args[0])) return message.reply("Please enter a real number!");
        
        if(args[0] > 50) return message.reply('You can not fill more than 50 messages!');
        if(args[0] < 1) return message.reply('You must fill at lease 1 message!');
        
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.send('Filler');
        });
    }
}*/