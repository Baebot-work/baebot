const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config.json");

var prefix = "\"";
var token = config.token;
var ownerID = "215232862822072320";

client.on("ready", () => {
  console.log("BAEBot ready, Serving "+client.users.size+"users in "+client.guilds.size+" servers!");
  client.user.setGame(`Say ${prefix}help for help! (What's new: Sudden Death! Do ${prefix}suddendeath!)`);
});

client.on("message", message => {

  let channel = message.channel;
  let guild  = message.guild;
  let author = message.author;
  let mentions = message.mentions;

  if (message.author.bot || message.author.id === client.user.id || message.content[0] !== prefix || message.channel.type === "dm") return;

  let command = message.content.substring(1).split(" ")[0];
  let params = message.content.substring(4).split(" ").slice(1);

  switch (command) {
    case "ping":
      message.channel.send("Pong! ("+client.ping+")");
      break;

    case "help":
      message.channel.send("__COMMANDS__\n**ping** - pong!\n**help** - shows this \n**join** - Join game time! \n**leave** - Leave game time! \n**stories** - Tells stories from different coders of this bot. \n**infofight** - Info on fights. \n**NSFW** - You can try this one out. \n**8ball** - A 8-ball, ya dummy! \n**drive** - A driving simulator! (WIP) \n**suddendeath** - A sudden death fighting simulator with a twist! Failing to kill your opponent heals you both! \n**invite** - An invite to my home server. \n**softbeans** - A list of users who got a softban. \n**fight** - (WIP) A fighting simulator! \n**todo** - Our to do list. \n**credits** - A list of credits! \n\n__OWNER COMMANDS__ \n**add** - Add a user to game time. \n**remove** - Remove a user from game time. \n**kick** - Kick a user. \n**ban** - Bans a user. \n**debug** - Debug the bot. \n**gametime** - Game time! \n**pin** - Pin the next message of yours! \n\n**If you find any bugs, report them!**");
      break;

      case "kick":
        if (message.author.id !== ownerID) {
          message.channel.send("Pleb. You aren't the owner!");
          break;
        }

        var member = message.guild.member(message.mentions.users.first());
        if (member.kickable) member.kick();
          break;

      case "debug":
        if (message.author.id !== ownerID) {
          message.channel.send("Pleb. You aren't the owner!");
          break;
       }
        message.channel.send(params);
        break;

      case "stories":
        let items = ["One time, Cypher123 spotted his friend in a parked car he biked by. He stopped, staring. He decided to loop back around and noticed them out of the car. Sad that it wasn't actually them, meaning he was staring a stranger down.", "Nothing yet... kidding, try again.", "<@!154066620124364800> took a 3 week vay-cay because he wanted to escape the wrath of coding me.", "Cypher123 got so tired of working on this bot, he hopes to dump it on another person. If only he wasn't so lazy...", "\"Once upon a time when I was a youngin' I would always get upset if I held shift while pressing space because I thought I was capitalizing space and that whatever I was typing into wouldn't accept it so I'd backspace and press space normally.\" - <@127184346334494721>"]
        let num = Math.floor(Math.random() * items.length);
        message.channel.send(items[num]);
        break;

      case "infofight":
        message.channel.send("Do +fight @opponent. Characters include: Whiplash (the speedy one), Jager (the strong one), and Medic.");
        break;

      case "NSFW":
        message.member.send("Dirty perv. >_> \nWhy are you obsessed with that cruddy stuff. Get a life and stop being nasty.").then(() => {message.member.kick(" ");})
        break;

      case "ban":
        if (message.author.id !== ownerID) {
          message.channel.send("Pleb. You aren't the owner!");
          break;
        }

        var member = message.guild.member(message.mentions.users.first());
        member.ban();
        break;

      case "softbeans":
        message.channel.send("Here's a list of id's of users who got a softban: \n```None yet.```");
        break;

      case "credits":
        message.channel.send("**Cypher123#0589**: The owner of the bot and this server. \n**Bit#8289**: Like, pretty much the co-coder of the bot. He did loads of work. \n**mikemodder007#7678**: The one who made the base of the bot. Also helped with other things. \n**GamersGotPower#9571**: The one who also helped with coding.");
        break;

      case "pin":
        var pe = message.author.id
        message.channel.awaitMessages((message) => {
        return message.author.id === pe;
        }, {
          time: 50000,
          maxMatches: 1
        }).then((messages) => {
          var message = messages.first();
          message.pin();
       }).catch(() => {
          message.channel.send("Can't pin anymore.");
        })
        break;

      case "todo":
        message.channel.send("This is a list of things to be done. \n```1 - Get fights started. \n2 - Driving Simulator.```")
        break;

      case "randomnum":
        message.channel.send(Math.floor(Math.random() * 90));
        break;

      case "invite":
        message.channel.send("Here is my home server: https://discord.gg/PthAt9e");
        break;

      case "8ball":
        let response = Math.floor(Math.random() * 14);
        switch(response){
          case 1:
            message.channel.send("Yes!");
            return;

          case 2:
            message.channel.send("Uh, no.");
            return;

          case 3:
            message.channel.send("That's an obvious no!");
            return;

          case 4:
            message.channel.send("The outcome isn't very good 😏");
            return;

          case 5:
           message.channel.send("Possibly. Try again!");
            return;

          case 6:
            message.channel.send("Doesn't seem like it.");
            return;

          case 7:
            message.channel.send("Obviously!");
            return;

          case 8:
            message.channel.send("It seems like it.");
            return;

          case 9:
            message.channel.send("Only if you wish.");
            return;

          case 10:
            message.channel.send("Ha! As if! I'm 100% sure that's a no.");
            return;

          case 0:
            message.channel.send("Believe it or not, I'm positively positive.");
            return;

          case 11:
            message.channel.send("If I said yes, that'd be a lie.");
            return;

          case 12:
            message.channel.send("If I said no, I'd be lying.");
            return;

          case 13:
            message.channel.send("More likely than not.");
            return;
        }
  }
});

client.on("guildMemberAdd", (member) => {
  if(member.guild.name === "Bots And Elsewhat") {
    if(member.user.id === "0") {
      member.send("You can't join, you're banned! Please discuss this with Cypher123#0589. If you blocked him, too bad. If you aren't banned nor have you been here before, report to Cypher123. The bot may be messing up.")
      if (member.kickable) {
        member.kick();
    }} else {
      console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
      member.guild.defaultChannel.send(`Hello, "${member.user.username}"!`);
    }
  }
});

client.on("guildMemberRemove", (member) => {
  console.log(`User "${member.user.username}" has left "${member.guild.name}"` );
  member.guild.defaultChannel.send(`Bye, "${member.user.username}"!`);
});

client.login(token);
