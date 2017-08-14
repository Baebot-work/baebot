const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config.json");

var prefix = "\"";
var token = config.token;
var ownerID = "215232862822072320";

client.on("ready", () =>{
  console.log("BAEBot started and ready!");
  client.user.setGame(`What's new? Sudden death! Do "suddendeath @opponent!"`);
});

client.on("message", message => {

  if (message.author.bot || message.author.id === client.user.id || message.content[0] !== prefix || message.channel.type === "dm") return;

  let command = message.content.substring(1).split(" ")[0];
  let params = message.content.substring(1).split(" ").slice(1);

  switch (command) {
    case "suddendeath":
      var done = false;
      var starterchar = "Not set";
      var opponentchar = "Not set";
      var restart = false;
      var starter = message.author;
      if (message.guild.member(message.mentions.users.first()) === undefined || message.guild.member(message.mentions.users.first()) === null) {
        message.channel.send("Smh. You can't do that. You gotta ping/mention one specific person.");
        break;
      }
      var memberr = message.guild.member(message.mentions.users.first().id)
      if(memberr === null) {
        message.channel.send("Smh. You can't do that.");
        break;
      } else {
message.channel.send(memberr+", "+message.author+" wants to fight you. Do you accept? Say `n` or `no` if you don't. Otherwise, say `y` or `yes`");
      var opponent = message.mentions.users.first().id;
      if(message.author.id === opponent){
        message.channel.send("Wait, you can't fight yourself!");
        break;
      }
      if(opponent === "324252593578835968"){
        message.channel.send("Hey, wait a second! If you fight me, I could cheat to beat you! You should think twice, you know.");
        break;
      }
      message.channel.awaitMessages((message) => {
        return message.author.id === opponent;
      }, {
        time: 60000,
        maxMatches: 1
      }).then((messages) => {
        var message = messages.first();
        if (message === undefined) {
          message.channel.send("You took too long!");
        }
        if (message.content === "y" || message.content === "yes" || message.content === "Y") {
        let restart = true
        let opponentchar = "<@"+opponent+">"
        let starterchar = starter
              if (restart === true) {
                var starterHP = 100;
                var opponentHP = 100;
                message.channel.send("**"+starterchar+"'s HP: "+starterHP+"**. **\n"+opponentchar+"'s HP: "+opponentHP+"**.");

                /*loop from here...*/
                function turn() {

                message.channel.send(starter+", attack 1, 2, or 3? \n`Attack 1` can deal all, but there's only a 1/9 chance you'll even hit. \n`Attack 2` has bad accuracy, but can deal up to 1 and 1/2 a full blow. \n`Attack 3` x2 full damage, but there's a 1/2 chance you'll lay a hand on your opponent...");
                message.channel.awaitMessages((message) => {
                  return message.author === starter;
                }, {
                  time: 60000,
                  maxMatches: 1
                }).then((messages) => {
                  var message = messages.first();
                  if (message.content === "1") {
                  let accuracy = Math.floor(Math.random() * 8);
                  if (accuracy !== 0) {
                    let power = Math.floor(Math.random() * 110);
                    var newopponentHP = opponentHP - power;
                    message.channel.send("You did "+power+" amount of power!");
                    message.channel.send("**"+starterchar+"'s HP**: "+starterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                  } else {
                    message.channel.send("You missed!");
                    var newopponentHP = opponentHP
                    message.channel.send("**"+starterchar+"'s HP**: "+starterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                  }
                  if (newopponentHP <== 0) {
                    var newopponentHP = 0
                    message.channel.send(starter+" won!");
                    return;
                  }
                } else if (message.content === "2") {
                  let accuracy = Math.floor(Math.random() * 6);
                  if (accuracy !== 0) {
                    let power = Math.floor(Math.random() * 150);
                    var newopponentHP = opponentHP - power;
                    message.channel.send("You did "+power+" amount of power!");
                    message.channel.send("**"+starterchar+"'s HP**: "+starterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                  } else {
                    message.channel.send("You missed!");
                    var newopponentHP = opponentHP
                    message.channel.send("**"+starterchar+"'s HP**: "+starterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                  }
                  if (newopponentHP <== 0) {
                    var newopponentHP = 0
                    message.channel.send(starter+" won!");
                    return;
                  }
                  } else if (message.content === "3") {
                    let accuracy = Math.floor(Math.random() * 1);
                    if (accuracy !== 0) {
                      let power = Math.floor(Math.random() * 200);
                      var newopponentHP = opponentHP - power;
                      message.channel.send("You did "+power+" amount of power!");
                      message.channel.send("**"+starterchar+"'s HP**: "+starterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                    } else {
                      message.channel.send("You missed!");
                      var newopponentHP = opponentHP
                      message.channel.send("**"+starterchar+"'s HP**: "+starterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                    }
                    if (newopponentHP <== 0) {
                      var newopponentHP = 0
                      message.channel.send(starter+" won!");
                      return;
                    }
                  } else {
                    message.channel.send("Invalid. Start this process again from the beginning.");
                  }

                  message.channel.send("<@"+opponent+">, attack 1, 2, or 3? \n`Attack 1` can deal all, but there's only a 1/9 chance you'll even hit. \n`Attack 2` has bad accuracy, but can deal up to 1 and 1/2 a full blow. \n`Attack 3` x2 full damage, but there's a 1/2 chance you'll lay a hand on your opponent...");
                  message.channel.awaitMessages((message) => {
                    return message.author.id === opponent;
                  }, {
                    time: 60000,
                    maxMatches: 1
                  }).then((messages) => {
                    var message = messages.first();
                    if (message.content === "1") {
                    let accuracy = Math.floor(Math.random() * 8);
                    if (accuracy !== 0) {
                      let power = Math.floor(Math.random() * 110);
                      var newstarterHP = starterHP - power;
                      message.channel.send("You did "+power+" amount of power!");
                      message.channel.send("**"+starterchar+"'s HP**: "+newstarterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                    } else {
                      message.channel.send("You missed!");
                      var newstarterHP = starterHP
                      message.channel.send("**"+starterchar+"'s HP**: "+newstarterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                    }
                    if (newstarterHP <== 0) {
                      var newstarterHP = 0
                      message.channel.send("<@"+opponent+"> won!");
                      return;
                    }
                  } else if (message.content === "2") {
                    let accuracy = Math.floor(Math.random() * 6);
                    if (accuracy !== 0) {
                      let power = Math.floor(Math.random() * 150);
                      var newstarterHP = starterHP - power;
                      message.channel.send("You did "+power+" amount of power!");
                      message.channel.send("**"+starterchar+"'s HP**: "+newstarterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                    } else {
                      message.channel.send("You missed!");
                      var newstarterHP = starterHP
                      message.channel.send("**"+starterchar+"'s HP**: "+newstarterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                    }
                    if (newstarterHP <== 0) {
                      var newstarterHP = 0
                      message.channel.send("<@"+opponent+"> won!");
                      return;
                    }
                    } else if (message.content === "3") {
                      let accuracy = Math.floor(Math.random() * 1);
                      if (accuracy !== 0) {
                        let power = Math.floor(Math.random() * 200);
                        var newstarterHP = starterHP - power;
                        message.channel.send("You did "+power+" amount of power!");
                        message.channel.send("**"+starterchar+"'s HP**: "+newstarterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                      } else {
                        message.channel.send("You missed!");
                        var newstarterHP = starterHP
                        message.channel.send("**"+starterchar+"'s HP**: "+newstarterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                      }
                      if (newstarterHP <== 0) {
                        var newstarterHP = 0
                        message.channel.send("<@"+opponent+"> won!");
                        return;
                      }
                    } else {
                      message.channel.send("Invalid. Start this process again from the beginning.");
                      return;
                    }
                    turn();
                }, () => {
                  message.channel.send("You took too long! Start this process again from the beginning!");
                });
              });

              /*to here*/
            }
            turn();
          }

      } else if (message.content === "n" || message.content === "no" || message.content === "N") {
          message.channel.send("Fight declined. <@"+opponent+"> is a wimp. :^)");
        } else {
          message.channel.send("Invalid. Please try again ~~pleb~~.");
        }
      }, () => {
        message.channel.send("Rage quit much");
      });
}
}
});

client.login(token);
