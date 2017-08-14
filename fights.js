const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config.json");

var prefix = "\"";
var token = config.token;
var ownerID = "215232862822072320";

client.on("ready", () =>{
  console.log("BAEBot started and ready!");
  client.user.setGame(`Up for testing fights.`);
});

client.on("message", message => {

  if (message.author.bot || message.author.id === client.user.id || message.content[0] !== prefix || message.channel.type === "dm") return;

  let command = message.content.substring(1).split(" ")[0];
  let params = message.content.substring(1).split(" ").slice(1);

  switch (command) {
    case "fight":
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
        message.channel.send("Choose your character, "+message.author);
        message.channel.send("**Whiplash**: \nThis character is very speedy! His attacks have a great accuracy, but a middling power. \n\n**Jager**: \nThis character is very strong, but since he isn't always able to keep up due to his slow movement, his accuracy isn't amazing. \n\n**Medic**: \nThis character has middling power and middling accuracy, but sadly cannot heal himself despite his name. I mean, that'd be cheating, right?");

        message.channel.awaitMessages((message) => {
          return message.author.id === opponent;
        }, {
          time: 60000,
          maxMatches: 1
        }).then((messages) => {
          var message = messages.first();
          if (message.content === "Whiplash" || message.content === "whiplash") {
          message.channel.send("Whiplash chosen!");
          let opponentchar = "Whiplash";

          message.channel.send(starter+", choose your character!");
          message.channel.send("**Jager**: \nThis character is very strong, but since he isn't always able to keep up due to his slow movement, his accuracy isn't amazing. \n\n**Medic**: \nThis character has middling power and middling accuracy, but sadly cannot heal himself despite his name. I mean, that'd be cheating, right?");
          message.channel.awaitMessages((message) => {
            return message.author === starter;
          }, {
            time: 60000,
            maxMatches: 1
          }).then((messages) => {
            var message = messages.first();
            if (message.content === "Jager" || message.content === "jager") {
            message.channel.send("Jager chosen!");
            var starterchar = "Jager";
            let done = true;
            message.channel.send("So, <@"+opponent+">, you've picked "+opponentchar+". And "+starter+" picked "+starterchar+". Let's get started!");
              var restart = true;

          } else if (message.content === "Medic" || message.content === "medic") {
              message.channel.send("Medic chosen!");
              var starterchar = "Medic";
              let done = true;
              message.channel.send("So, <@"+opponent+">, you've picked "+opponentchar+". And "+starter+" picked "+starterchar+". Let's get started!");
                var restart = true;
            } else {
              message.channel.send("Invalid. Start this process again from the beginning.");
            }
            if (restart === true) {
                message.channel.send("The starter of the battle has to choose Medic!");
            }
          }, () => {
            message.channel.send("You took too long! Start this process again from the beginning!");
          });

        } else if (message.content === "Jager" || message.content === "jager") {
            message.channel.send("Jager chosen!");
          let opponentchar = "Jager";

          message.channel.send(starter+", choose your character!");
          message.channel.send("**Whiplash**: \nThis character is very speedy! His attacks have a great accuracy, but a middling power. \n\n**Medic**: \nThis character has middling power and middling accuracy, but sadly cannot heal himself despite his name. I mean, that'd be cheating, right?");
          message.channel.awaitMessages((message) => {
            return message.author === starter;
          }, {
            time: 60000,
            maxMatches: 1
          }).then((messages) => {
            var message = messages.first();
            if (message.content === "Whiplash" || message.content === "whiplash") {
            message.channel.send("Whiplash chosen!");
            var starterchar = "Whiplash";
            let done = true;
            message.channel.send("So, <@"+opponent+">, you've picked "+opponentchar+". And "+starter+" picked "+starterchar+". Let's get started!");
              var restart = true;

          } else if (message.content === "Medic" || message.content === "medic") {
              message.channel.send("Medic chosen!");
              var starterchar = "Medic";
              let done = true;
              message.channel.send("So, <@"+opponent+">, you've picked "+opponentchar+". And "+starter+" picked "+starterchar+". Let's get started!");
                var restart = true;
            } else {
              message.channel.send("Invalid. Start this process again from the beginning.");
            }
            if (restart === true) {
                message.channel.send("The starter of the battle has to choose Medic!");
            }
          }, () => {
            message.channel.send("You took too long! Start this process again from the beginning!");
          });

        } else if (message.content === "Medic" || message.content === "medic") {
            message.channel.send("Medic chosen!");
            let opponentchar = "Medic";

            message.channel.send(starter+", choose your character!");
            message.channel.send("**Whiplash**: \nThis character is very speedy! His attacks have a great accuracy, but a middling power. \n\n**Jager**: \nThis character is very strong, but since he isn't always able to keep up due to his slow movement, his accuracy isn't amazing.");
            message.channel.awaitMessages((message) => {
              return message.author === starter;
            }, {
              time: 60000,
              maxMatches: 1
            }).then((messages) => {
              var message = messages.first();
              if (message.content === "Jager" || message.content === "jager") {
              message.channel.send("Jager chosen!");
              var starterchar = "Jager";
              let done = true;
              message.channel.send("So, <@"+opponent+">, you've picked "+opponentchar+". And "+starter+" picked "+starterchar+". Let's get started!");
                var restart = true;
              } else if (message.content === "Whiplash" || message.content === "whiplash") {
                message.channel.send("Whiplash chosen!");
                var starterchar = "Whiplash";
                let done = true;
                message.channel.send("So, <@"+opponent+">, you've picked "+opponentchar+". And "+starter+" picked "+starterchar+". Let's get started!");
                  var restart = true;
              } else {
                message.channel.send("Invalid. Start this process again from the beginning.");
              }
              if (restart === true) {
                var starterHP = 100;
                var opponentHP = 100;
                message.channel.send("**"+starterchar+"'s HP: "+starterHP+"**. **\n"+opponentchar+"'s HP: "+opponentHP+"**.");

                /*loop from here...*/
                function turn() {

                message.channel.send(starter+", attack 1, 2, or 3? \n`Attack 1` can deal decent damage, but there's only a 1/5 chance you'll even hit. Good luck with that... \n`Attack 2` has decent accuracy, but can only deal up to 7 damage. \n`Attack 3` can deal great damage, but there's a 1/3 chance you'll lay a hand on your opponent...");
                message.channel.awaitMessages((message) => {
                  return message.author === starter;
                }, {
                  time: 60000,
                  maxMatches: 1
                }).then((messages) => {
                  var message = messages.first();
                  if (message.content === "1") {
                  let accuracy = Math.floor(Math.random() * 4);
                  if (accuracy !== 0) {
                    let power = Math.floor(Math.random() * 12);
                    var newopponentHP = opponentHP - power;
                    message.channel.send("You did "+power+" amount of power!");
                    message.channel.send("**"+starterchar+"'s HP**: "+starterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                  } else {
                    message.channel.send("You missed!");
                    var newopponentHP = opponentHP
                    message.channel.send("**"+starterchar+"'s HP**: "+starterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                  }
                } else if (message.content === "2") {
                  let accuracy = Math.floor(Math.random() * 8);
                  if (accuracy !== 0) {
                    let power = Math.floor(Math.random() * 7);
                    var newopponentHP = opponentHP - power;
                    message.channel.send("You did "+power+" amount of power!");
                    message.channel.send("**"+starterchar+"'s HP**: "+starterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                  } else {
                    message.channel.send("You missed!");
                    var newopponentHP = opponentHP
                    message.channel.send("**"+starterchar+"'s HP**: "+starterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                  }
                  } else if (message.content === "3") {
                    let accuracy = Math.floor(Math.random() * 2);
                    if (accuracy !== 0) {
                      let power = Math.floor(Math.random() * 20);
                      var newopponentHP = opponentHP - power;
                      message.channel.send("You did "+power+" amount of power!");
                      message.channel.send("**"+starterchar+"'s HP**: "+starterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                    } else {
                      message.channel.send("You missed!");
                      var newopponentHP = opponentHP
                      message.channel.send("**"+starterchar+"'s HP**: "+starterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                    }
                  } else {
                    message.channel.send("Invalid. Start this process again from the beginning.");
                  }

                  message.channel.send("<@"+opponent+">, attack 1, 2, or 3? \n`Attack 1` can deal decent damage, but there's only a 1/5 chance you'll even hit. Good luck with that... \n`Attack 2` has decent accuracy, but can only deal up to 7 damage. \n`Attack 3` can deal great damage, but there's a 1/3 chance you'll lay a hand on your opponent...");
                  message.channel.awaitMessages((message) => {
                    return message.author.id === opponent;
                  }, {
                    time: 60000,
                    maxMatches: 1
                  }).then((messages) => {
                    var message = messages.first();
                    if (message.content === "1") {
                    let accuracy = Math.floor(Math.random() * 4);
                    if (accuracy !== 0) {
                      let power = Math.floor(Math.random() * 12);
                      var newstarterHP = starterHP - power;
                      message.channel.send("You did "+power+" amount of power!");
                      message.channel.send("**"+starterchar+"'s HP**: "+newstarterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                    } else {
                      message.channel.send("You missed!");
                      var newstarterHP = starterHP
                      message.channel.send("**"+starterchar+"'s HP**: "+newstarterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                    }
                  } else if (message.content === "2") {
                    let accuracy = Math.floor(Math.random() * 8);
                    if (accuracy !== 0) {
                      let power = Math.floor(Math.random() * 7);
                      var newstarterHP = starterHP - power;
                      message.channel.send("You did "+power+" amount of power!");
                      message.channel.send("**"+starterchar+"'s HP**: "+newstarterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                    } else {
                      message.channel.send("You missed!");
                      var newstarterHP = starterHP
                      message.channel.send("**"+starterchar+"'s HP**: "+newstarterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                    }
                    } else if (message.content === "3") {
                      let accuracy = Math.floor(Math.random() * 2);
                      if (accuracy !== 0) {
                        let power = Math.floor(Math.random() * 20);
                        var newstarterHP = starterHP - power;
                        message.channel.send("You did "+power+" amount of power!");
                        message.channel.send("**"+starterchar+"'s HP**: "+newstarterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                      } else {
                        message.channel.send("You missed!");
                        var newstarterHP = starterHP
                        message.channel.send("**"+starterchar+"'s HP**: "+newstarterHP+". \n**"+opponentchar+"'s HP**: "+newopponentHP+".");
                      }
                    } else {
                      message.channel.send("Invalid. Start this process again from the beginning.");
                      return;
                    }
                    turn();
                    }
                }, () => {
                  message.channel.send("You took too long! Start this process again from the beginning!");
                });
              });

              /*to here*/
            }
            turn();
            }
              }
            }, () => {
              message.channel.send("You took too long! Start this process again from the beginning!");
            });
          } else {
            message.channel.send("Invalid. Start this process again from the beginning.");
          }
        }, () => {
          message.channel.send("You took too long! Try again!");
        });

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
