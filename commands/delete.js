module.exports = {
    name: 'delete',
    execute(message, args){
        message.channel.bulkDelete(2, true);
        console.log('deleted');
    }
}