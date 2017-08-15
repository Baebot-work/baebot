exports.run = (client, message, args) => {
    let response = Math.floor(Math.random() * 14);
    switch(response){
      case 1:
        return message.channel.send("Yes!");
        

      case 2:
        return message.channel.send("Uh, no.");
        

      case 3:
        return message.channel.send("That's an obvious no!");
        

      case 4:
        return message.channel.send("The outcome isn't very good 😏");
        

      case 5:
       return message.channel.send("Possibly. Try again!");
        

      case 6:
        return message.channel.send("Doesn't seem like it.");
        

      case 7:
        return message.channel.send("Obviously!");
        

      case 8:
        return message.channel.send("It seems like it.");
        

      case 9:
        return message.channel.send("Only if you wish.");
        

      case 10:
        return message.channel.send("Ha! As if! I'm 100% sure that's a no.");
        

      case 0:
        return message.channel.send("Believe it or not, I'm positively positive.");
        

      case 11:
        return message.channel.send("If I said yes, that'd be a lie.");
        

      case 12:
        return message.channel.send("If I said no, I'd be lying.");
        

      case 13:
        return message.channel.send("More likely than not.");
        
    }
}