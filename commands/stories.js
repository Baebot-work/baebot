exports.run = (client, message, args) => {
    let items = ["One time, Cypher123 spotted his friend in a parked car he biked by. He stopped, staring. He decided to loop back around and noticed them out of the car. Sad that it wasn't actually them, meaning he was staring a stranger down.",
    "Nothing yet... kidding, try again.",
    "<@!154066620124364800> took a 3 week vay-cay because he wanted to escape the wrath of coding me.",
    "Cypher123 got so tired of working on this bot, he hopes to dump it on another person. If only he wasn't so lazy...",
    "\"Once upon a time when I was a youngin' I would always get upset if I held shift while pressing space because I thought I was capitalizing space and that whatever I was typing into wouldn't accept it so I'd backspace and press space normally.\" - <@127184346334494721>",
    "Once I did a thing, then the world blew up... sad day.",
    "AaAaAAaaAaA HAhAhAhA gIt Is sOoOoO COoL"]

    let num = Math.floor(Math.random() * items.length);
    return message.channel.send("Here's your random story!```"+items[num]+"```")
}
