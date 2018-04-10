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

// Random Number Generator Function
// Allows the bot to generate the numbes for the d20 roll
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
    // Bot needs to listen for commands.
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
                // Add case commands below here
        }
    }
});