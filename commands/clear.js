/*module.exports = {
    name: 'clear',
    aliases: ['c', 'cl'],
    description: "Clears up to 50 messages",
    async execute(client, message, args){
        if(!args[0]) return message.reply("Please enter the amount of messages you want to delete.");
        if(isNaN(args[0])) return message.reply("Please enter a real number!");
        
        if(args[0] > 50) return message.reply('You can not delete more than 50 messages!');
        if(args[0] < 1) return message.reply('You must delete at lease 1 message!');
        
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}*/