const Discord = require('dscord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("comand: :help");
    console.log("Connected");
});

bot.login("Nzc3NjY5NDQzNDg4NDQ4NTYy.X7GzGw.E3L7o73u1Yw-cyzaQe2vdj85aoA");


bot.on('message!, message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n !tt \n !fabriquant");
    }
});
