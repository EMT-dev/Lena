const Discord = require('dscord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("comand: :help");
    console.log("Connected");
});

bot.connect("Nzc3NjY5NDQzNDg4NDQ4NTYy.X7GzGw.cMulT58oyfBbMKwqS7nwMk9igww");


bot.on('message!, message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n !tt \n !fabriquant");
    }
});
