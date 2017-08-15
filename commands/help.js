exports.run = (client, message, args) => {
    message.channel.send("__COMMANDS__\n" +
    "**ping** - pong!\n" +
    "**help** - shows this \n" +
    "**join** - Join game time! \n" +
    "**leave** - Leave game time! \n" +
    "**stories** - Tells stories from different coders of this bot. \n" +
    "**infofight** - Info on fights. \n" +
    "**NSFW** - You can try this one out. \n" +
    "**8ball** - A 8-ball, ya dummy! \n" +
    "**drive** - A driving simulator! (WIP) \n" +
    "**suddendeath** - A sudden death fighting simulator with a twist! Failing to kill your opponent heals you both! \n" +
    "**invite** - An invite to my home server. \n" +
    "**softbeans** - A list of users who got a softban. \n" +
    "**fight** - (WIP) A fighting simulator! \n" +
    "**todo** - Our to do list. \n" +
    "**credits** - A list of credits! \n" +
    "\n__OWNER COMMANDS__ \n" +
    "**add** - Add a user to game time. \n" +
    "**remove** - Remove a user from game time. \n" +
    "**kick** - Kick a user. \n" +
    "**ban** - Bans a user. \n" +
    "**debug** - Debug the bot. \n" +
    "**gametime** - Game time! \n" +
    "**pin** - Pin the next message of yours!" +
    "\n\n**If you find any bugs, report them.").catch(console.error)
}