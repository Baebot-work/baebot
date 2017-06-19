const discord = require("discord.js");
const client = new discord.Client();

var prefix = "+";
var token = "MzI0MjUyNTkzNTc4ODM1OTY4.DCHEFQ.DGNzmLh8FYF_YNoT0Y3lBERkdL8";
var ownerID = "215232862822072320";

client.on("ready", () =>{
  console.log("BAEBot started and ready!");
  client.user.setGame(`Say ${prefix}help for help!`);
});

client.on("message", message => {
  if (message.author.bot || message.author.id === client.user.id || message.content[0] !== prefix) return;

  let command = message.content.substring(1).split(" ")[0];
  let params = message.content.substring(1).split(" ").slice(1);

  switch (command) {
    case "ping":
      message.channel.send("Pong! -- The bot is alive");
      break;
    case "help":
      message.channel.send("__COMMANDS__\n**ping** - pong!\n**help** - shows this \n**join** - Join game time! \n**leave** - Leave game time! \n**stories** - Tells stories from different coders of this bot. \n\n__OWNER COMMANDS__ \n**add** - Add a user to game time. \n**remove** - Remove a user from game time. \n**kick** - Kick a user. \n**debug** - Debug the bot.\n\n**If you find any bugs, report them!**");
      break;
    case "gametime":
      if (message.author.id !== ownerID) {
        message.channel.send(`Unverified or you aren\'t the owner. The current owner is <@!${ownerID}>`);
        return;
      }
      var lines = ["@here Game time! Join with +join!", "@here Looks like it\'s game time! Join with +join!"];
      message.channel.send(lines[Math.floor(Math.random() * lines.length)])
      break;
    case "join":
      var role = message.guild.roles.find("name", "game-time-players");
      if (role === null) { // If it doesn't exist, create a new one.
        role = message.guild.createRole({name: "game-time-players"});
      }
      message.member.addRole(role);
      message.channel.send("Joined!");
      break;
    case "leave":
      var role = message.guild.roles.find("name", "game-time-players");
      message.member.removeRole(role);
      message.channel.send("Left!");
      break;
    case "remove":
      if (message.author.id !== ownerID) {
        message.channel.send("Pleb. You aren't the owner!");
        break;
      }

      var role = message.guild.roles.find("name", "game-time-players");
      var member = message.guild.member(message.mentions.users.first());
      member.removeRole(role).catch(console.error);
      message.channel.send("Removed!");
      break;
      case "kick":
      if (message.author.id !== ownerID) {
        message.channel.send("Pleb. You aren't the owner!");
      break;
      }

        var member = message.guild.member(message.mentions.users.first());
        member.kick(" ")
        break;
      case "add":
        if (message.author.id !== ownerID) {
          message.channel.send("Pleb. You aren't the owner!");
        break;
        }

        var role = message.guild.roles.find("name", "game-time-players");
        var member = message.guild.member(message.mentions.users.first());
        member.addRole(role).catch(console.error);
        message.channel.send("Added!");
        break;
    case "debug":
    if (message.author.id !== ownerID) {
      message.channel.send("Pleb. You aren't the owner!");
    break;
    }
      message.channel.send(params);
      break;

  case "stories":
  let items = ["1one","2two","3three"]
  let num = Math.floor(Math.random() * items.length);
  switch(num){
  case 0:
        message.channel.send("One time, Cypher123 spotted his friend in a parked car he biked by. He stopped, staring. He decided to loop back around and noticed them out of the car. Sad that it wasn't actually them, meaning he was staring a stranger down.");
    return; //always do this at the end
  case 1:
          message.channel.send("Nothing yet.");
    return;
  case 2:
        message.channel.send("Bit bork.");
    return; //always do this at the end
  case 3:
          message.channel.send("Hoi");
    return;
  }
  break;

  case "fight":
  message.channel.send("Do +fight @opponent (character). Characters include: Whiplash (the speedy one), Jager (the strong one), and Medic.")
  break;
}
});

client.login(token);
