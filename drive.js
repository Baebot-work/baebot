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
   case "drive":
   message.channel.send("Looks like we're off! 🚗💨");
   let channel = message.channel;
   let miles = Math.floor(Math.random() * 5);
   if (miles === 1) {
     message.channel.send("You get in your car and drive **"+miles+"** mile away from home before your first incident!");
   } else if (miles === 0) {
     message.channel.send("You get in your car and drive **"+miles+"** miles away from home before your first incident! Such luck.");
   } else {
   message.channel.send("You get in your car and drive **"+miles+"** miles away from home before your first incident!");
 }
   let incident = Math.floor(Math.random() * 3);
   switch (incident) {
     case 0:
     message.channel.send("You got hit by another car!");
     let hitcause = Math.floor(Math.random() * 3);

      switch (hitcause) {

        case 0:
        message.channel.send("You die instantly! Game over!");
        return;

        case 1:
        message.channel.send("You die instantly! Game over!");
        return;

        case 2:
        message.channel.send("You live on!");
        break;

      }
     break;

     case 1:
     message.channel.send("It's pouring rain!");
     let raincause = Math.floor(Math.random() * 3);

      switch (raincause) {
        case 1:
        message.channel.send("You turn on your windshield wipers!");
        break;

        case 0:
        message.channel.send("You didn't repair your windshield wipers yesterday! Looks like this is going downhill!");
        let norepair = Math.floor(Math.random() * 2);

        switch (norepair) {
          case 0:
          message.channel.send("The rain is too much! You soon lose track of the road and eventually die. Game over.");
          return;

          case 1:
          message.channel.send("You find a place to stay for the night, sleep peacefully, wake back up, and hit the road again.");
          break;
        }
        break;

        case 2:
        message.channel.send("Your windshield wipers work, but they're about to break under the pressure of the rain! Whatever happens next, it better be good!");
        let rainafter = Math.floor(Math.random() * 3);

         switch (rainafter) {
          case 0:
           message.channel.send("The rain stopped! You continue on your way.");
          break;

          case 1:
           message.channel.send("The rain is too much and breaks the windshield wipers! You soon lose track of the road and eventually die. Game over.");
          return;

          case 2:
          message.channel.send("You find a place to stay for the night, sleep peacefully, wake back up, and hit the road again.");
          break;
         }
        break;
      }
     break;

     case 2:
     message.channel.send("You run out of gas!");
     let gascause = Math.floor(Math.random() * 3);

      switch (gascause) {
        case 0:
        message.channel.send("Luckily, there's a gas station nearby! You get your gas, fill your tank, and continue to drive!");
        break;

        case 1:
        message.channel.send("You check your GPS and there's a gas station not *too* far from here. Luckily, you brought your bike!");
        message.channel.send("You make it to the gas station and back successfully. Now you fill your tank and hit the road again.");
        break;

        case 2:
        message.channel.send("You check your GPS and there's a gas station not *too* far from here. But you forgot your bike! Looks like you're walking...");
        let youwalked = Math.floor(Math.random() * 3);

          switch (youwalked) {
            case 0:
            message.channel.send("You got attacked by a stranger! They stole your money, and eventually, you die. Game over!");
            return;

            case 1:
            message.channel.send("You successfully made it to the gas station and got back to your car, filling up your gas tank! Let's get back on the road!");
            break;

            case 2:
            message.channel.send("It's pouring down rain! You run over to the gas station, but by the time you get there, they're closed! Such luck. You decide to stay there for the night. Going into the little gas station shop, you wait.");
            message.channel.send("You fell asleep. But now it's morning. 🐦  You wake up, get gas and go back to your car.");
            break;
          }
        break;
         }
     break;
   }
   let miles2 = Math.floor(Math.random() * 4);
   if (miles2 === 1) {
   message.channel.send("You're still on the road, but you get **"+miles2+"** mile away from your last incident before something else happens!");
 } else if (miles2 === 0) {
   message.channel.send("You're still on the road, but you get **"+miles2+"** miles away from your last incident before something else happens! Good going. *slow clap*");
 } else {
   message.channel.send("You're still on the road, but you get **"+miles2+"** miles away from your last incident before something else happens!");
 }
 let incident2 = Math.floor(Math.random() * 3);

 switch (incident2) {
   case 0:
   message.channel.send("You encounter the most annoying bot ever - Cypher's Void! You die of merciless insanity. Game over!");
   return;

   case 1:
   message.channel.send("Someone shoots a bullet at you!");
   let survive = Math.floor(Math.random() * 2);

   switch (survive) {
    case 0:
     message.channel.send("The bullet missed! You continue to drive, but a bit more anxiously...");
    break;

    case 1:
    message.channel.send("The bullet hit home - you ***are*** dead. Game over! :D");
    return;
   }
   break;

   case 2:
   message.channel.send("Someone's lying on the side of the road, weakened. They ask for your help.");
   let help = Math.floor(Math.random() * 2);

   switch (help) {
     case 0:
     message.channel.send("They're a faker! They attack and kill you in an instant!");
     return;

     case 1:
     message.channel.send("You drive them to their wanted destination safe and sound.");
     break;
   }
   break;
 }
 let miles3 = Math.floor(Math.random() * 3);
 if (miles3 === 1) {
 message.channel.send("You're still on the road, but you get **"+miles3+"** mile away from your last incident before something else happens!");
} else if (miles3 === 0) {
 message.channel.send("You're still on the road, but you get **"+miles3+"** miles away from your last incident before something else happens! Good going. *slow clap*");
} else {
 message.channel.send("You're still on the road, but you get **"+miles3+"** miles away from your last incident before something else happens!");
}
   break;
  }
});

  client.login(token);
