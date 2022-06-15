const Rarities = ["Common", "Uncommon", "Rare"];
const Modifiers = ["None", "ReverseHolo", "Holo", "Error"];
const BaseSetPokeRareList = [
    {name: 'Alakazam', rarity: 'Rare', modifier: 'Holo '},
    {name: 'Blastoise', rarity: 'Rare', modifier: 'Holo' },
    {name: 'Chansey', rarity: 'Rare', modifier: 'Holo' },
    {name: 'Charizard', rarity: 'Rare', modifier: 'Holo '},
    {name: 'Clefairy', rarity: 'Rare', modifier: 'Holo '},
    {name: 'Gyarados', rarity: 'Rare', modifier: 'Holo '},
    {name: 'Hitmonchan', rarity: 'Rare', modifier: 'Holo '},
    {name: 'Machamp', rarity: 'Rare', modifier: 'Holo '},
    {name: 'Magneton', rarity: 'Rare', modifier: 'Holo '},
    {name: 'Mewtwo', rarity: 'Rare', modifier: 'Holo '},
    {name: 'Nidoking', rarity: 'Rare', modifier: 'Holo '},
    {name: 'Ninetales', rarity: 'Rare', modifier: 'Holo '},
    {name: 'Poliwrath', rarity: 'Rare', modifier: 'Holo '},
    {name: 'Raichu', rarity: 'Rare', modifier: 'Holo '},
    {name: 'Venusaur', rarity: 'Rare', modifier: 'Holo '},
    {name: 'Zapdos', rarity: 'Rare', modifier: 'Holo '},
    {name: 'Beedrill', rarity: 'Rare', modifier: ''},
    {name: 'Dragonair', rarity: 'Rare', modifier: ''},
    {name: 'Dugtrio', rarity: 'Rare', modifier: ''},
    {name: 'Electabuzz', rarity: 'Rare', modifier: ''},
    {name: 'Electrode', rarity: 'Rare', modifier: ''},
    {name: 'Pidgeotto', rarity: 'Rare', modifier: ''}];

var Discord = require('discord.io');

var logger = require('winston');

var auth = require('./auth.json');



//configure logger settings

logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console,{
    colorize: true

});

logger.level = 'debug';

//Initialize discord bot

var bot = new Discord.Client({
    token: auth.token,
    autorun:true
});

bot.on('ready', function (evt){
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function(user, userID, channelID, message, evt){
    //Out bot needs to know if it will execute a command
    //It will listen for messages that start with %

    if(message.substring(0,1) == '%'){
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);

        switch(cmd){
            //%ping

            case 'pokemon':
                //Roll random number
                var roll = Math.floor(Math.random() * BaseSetPokeRareList.length);
                
                var pokemon = BaseSetPokeRareList[roll].modifier + BaseSetPokeRareList[roll].name + roll;
                bot.sendMessage({
                    to: channelID,
                    message: pokemon
                });
                break;
            case 'Shoogy':
                bot.sendMessage({
                    to: channelID,
                    message: 'Ill be on in an hour'
                });
                break;
        }
    }
});