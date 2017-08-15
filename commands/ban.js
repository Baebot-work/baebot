exports.run = (client, message, [mention, ...reason]) => {
    const config = require("./config.json")
    if(!message.author.id === (config.owner))
        return message.channel.send(":x: You don't have permission to run that command!")

    if(message.mention.users.size === 0)
        return message.channel.send(":x: Error! You must mention a user to ban!")

    if(!message.guild.me.hasPermission("BAN_MEMBERS"))
        return message.channel.send(":x: Error! I don't have permission to ban users!")

    if(!message.author.kickable())
        return message.channel.send(":x: I can't kick the mentioned user! Is their role higher than mine?")

    kMember = message.mentions.members.first();

    kMember.send("You have been banned from the server **${message.guild.name}**\nReason: "+reason.join(" "));

    kMember.kick(reason.join(" ")).then(member => {
        message.channel.send("User **${member.user.username}** was banned!")
    })
};