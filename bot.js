var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot

// Random Numbe Generator
// Allows for the bot to actually generate the rolls

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});
bot.on('ready', function(evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function(user, userID, channelID, message, evt) {
    // Lets the bot listen for commands.
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !d20
            case 'd20':
                bot.sendMessage({
                    to: channelID,
                    message: getRandomInt(1, 21)
                });
                break;
            case 'd100':
                bot.sendMessage({
                    to: channelID,
                    message: getRandomInt(1, 101)
                });
                break;
            case 'd8':
                bot.sendMessage({
                    to: channelID,
                    message: getRandomInt(1, 9)
                });
                break;
            case 'd4':
                bot.sendMessage({
                    to: channelID,
                    message: getRandomInt(1, 5)
                });
                break;
            case 'd12':
                bot.sendMessage({
                    to: channelID,
                    message: getRandomInt(1, 13)
                });
                break;
            case 'd10':
                bot.sendMessage({
                    to: channelID,
                    message: getRandomInt(1, 11)
                });
                break;
            case 'd6':
                bot.sendMessage({
                    to: channelID,
                    message: getRandomInt(1, 7)
                });
                break;
                // Add case commands after here.
        }
    }
});