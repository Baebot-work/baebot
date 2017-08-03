const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config.json");

var prefix = "\"";
var token = config.token;
var ownerID = "215232862822072320";

client.on("ready", () =>{
  console.log("BAEBot started and ready!");
  client.user.setGame(`Say ${prefix}help for help! (What's new: Driving Simulator! Do ${prefix}drive!)`);
});

client.on("message", message => {
  if (message.author.bot || message.author.id === client.user.id || message.content[0] !== prefix || message.channel.type === "dm") return;

  let command = message.content.substring(1).split(" ")[0];
  let params = message.content.substring(1).split(" ").slice(1);

  switch (command) {
   case "ff":
   var firstplayer = message.author.username
   if (message.mentions.users.first() === null || message.mentions.users.first() === undefined) {
     message.channel.send("Smh.... S, m, h.")
     return;
   }
   var secondplayer = message.mentions.users.first().first
   var HP = 100
   message.channel.send({
       "embed": {
           title: "Let the fight start!",
           description: "We've started!",
           color: 261810
       }
   })
     .then(message =>
       setInterval(function () {
         var power = Math.floor(Math.random() * 20);
         let newHP = HP - power
         message.edit({
           "embed": {
               title: "Aaaaa!",
               description: power+" damage was done!",
               color: 261810
           }
       })
     }, 1500));
   break;
  }
});

  client.login(token);
