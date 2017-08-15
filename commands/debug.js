exports.run = (client, message, args) => {
    if (author.id !== config.owner) {
        return message.channel.send(":x: You don't have permission to run that command!\nRequired permission: `Bot Owner`");
    }
    return message.channel.send(args.join(" "));
}