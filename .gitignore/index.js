const Discord = require('dscord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("comand: :help");
    console.log("Connected");
});

bot.loging("YC-g_bBe_s1aujCs1k0rOg3imsnQaGDz");


bot.on('message!, message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n !tt \n !fabriquant");
    }
});
