exports.run = (client, message, [mention, ...reason]) => {
    const config = require("./config.json")
    if(!message.author.id === (config.owner))
        return message.channel.send(":x: You don't have permission to run that command!")

    if(message.mention.users.size === 0)
        return message.channel.send(":x: Error! You must mention a user to kick!")

    if(!message.guild.me.hasPermission("KICK_MEMBERS"))
        return message.channel.send(":x: Error! I don't have permission to kick users!")

    kMember = message.mentions.members.first();

    kMember.send("You have been kicked from the server **${message.guild.name}**\nReason: "+reason.join(" "));

    kMember.kick(reason.join(" ")).then(member => {
        message.channel.send("User **${member.user.username}** was kicked!")
    })
};