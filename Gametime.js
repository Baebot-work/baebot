const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config.json");

var prefix = "\"";
var token = config.token;
var ownerID = "215232862822072320";
var ownerID2 = "152541437068705793";
var ownerID3 = "102804638503280640";
var ownerID4 = "154066620124364800";

client.on("ready", () =>{
  console.log("BAEBot started and ready!");
  client.user.setGame(`Say ${prefix}help for help! (What's new: Driving Simulator! Do ${prefix}drive!)`);
});

client.on("message", message => {
  if (message.author.bot || message.author.id === client.user.id || message.content[0] !== prefix || message.channel.type === "dm") return;

  let command = message.content.substring(1).split(" ")[0];
  let params = message.content.substring(1).split(" ").slice(1);

  switch (command) {
    case "gametime":
      if (message.author.id !== ownerID) {
        message.channel.send(`Unverified or you aren\'t the owner. The current owner is <@!${ownerID}>`);
        return;
      }
      var lines = ["@here Game time! Join with +join!", "@here Looks like it\'s game time! Join with +join!", "Hey, @everyone! Game time!"];
      message.channel.send(lines[Math.floor(Math.random() * lines.length)]);
      message.channel.send("Cypher, do you want `ask Cypher`, `tourney`, or `ask the others`?")
      message.channel.awaitMessages((message) => {
  return message.author.id === ownerID;
}, {
  time: 60000,
  maxMatches: 1
}).then((messages) => {
  var message = messages.first();
  if (message.content === "ask Cypher") {
  message.channel.send("Ok! Time for 5 questions! Go to <#331596601191563265> (#game-time). Don't know how to play? Ask <@"+ownerID+"> 5 yes\\no questions. Join now with +join!");
} else if (message.content === "tourney") {
    message.channel.send("Hey guys! It's time for a tourney!");
} else if (message.content === "ask the others") {
    message.channel.send("It's yes\\no time! Go to <#331596601191563265> (#game-time). Don't know how to play? <@"+ownerID+"> asks 4 questions and you have to respond truthfully with either yes or no. Join now with +join!");
  } else {
    message.channel.send("Invalid. Please try again.");
  }})
      /*client.on("message", message => {
          if (message.author.bot || message.author.id === client.user.id ||  message.channel.type === "dm" || message.author.id !== ownerID) return;
        if(message.content.startsWith("1"));
        message.channel.send("Cool!");
        return;
      })*/
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

        case "join":
          var role = message.guild.roles.find("name", "game-time-players");
          if (role === null) { // If it doesn't exist, create a new one.
            role = message.guild.createRole({name: "game-time-players"});
          }
          message.member.addRole(role);
          message.channel.send("Joined!");
          return;

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
}

});

client.login(token);
