const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("ElyBot, //help");
    console.log("Le bot a bien ete conecté");
});

bot.login("NDA3MTI1MzYxNTk2NDMyMzg0.DXL5CQ.jMf7MepV70DwT-DQHQFinzlQdh8");
