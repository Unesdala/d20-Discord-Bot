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

<<<<<<< HEAD
// Random Number Generator
=======
// Random Number Generator Function
>>>>>>> parent of f3b7fb4... More dice, dice shouldn't be able to roll 0 now
// Allows for the bot to actually generate the rolls

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
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
                    message: getRandomInt(21)
                });
                break;
                // !d100
            case 'd100':
                bot.sendMessage({
                    to: channelID,
                    message: getRandomInt(101)
                });
                break;
                // Add case commands after here.
        }
    }
});