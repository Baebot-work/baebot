const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("BAEBot ready! Serving "+client.users.size+" users in "+client.guilds.size+" servers!");
  client.user.setGame(`Say ${config.prefix}help for help! (What's new: Sudden Death! Do ${config.prefix}suddendeath!)`);
});

client.on("message", message => {
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
  
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args, config);
    } catch (err) {
      console.error(err);
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

client.login(config.token);