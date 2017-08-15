exports.run = (client, message, args) => {
    return message.channel.send(Math.floor(Math.random() * 90));
}