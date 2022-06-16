const Rarities = ["Common", "Uncommon", "Rare"];
const Modifiers = ["None", "ReverseHolo", "Holo", "Error"];
const BaseSetPokeRareList = [
    {name: 'Alakazam', rarity: 'Rare', modifier: 'Holo '},
    {name: 'Blastoise', rarity: 'Rare', modifier: 'Holo ' },
    {name: 'Chansey', rarity: 'Rare', modifier: 'Holo ' },
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
    {name: 'Pidgeotto', rarity: 'Rare', modifier: ''},
    {name: 'Clefairy Doll', rarity: 'Rare', modifier: ''},
    {name: 'Computer Search', rarity: 'Rare', modifier: ''},
    {name: 'Devolution Spray', rarity: 'Rare', modifier: ''},
    {name: 'Impostor Professor Oak', rarity: 'Rare', modifier: ''},
    {name: 'Item Finder', rarity: 'Rare', modifier: ''},
    {name: 'Lass', rarity: 'Rare', modifier: ''},
    {name: 'Pokemon Breeder', rarity: 'Rare', modifier: ''},
    {name: 'Pokemon Trader', rarity: 'Rare', modifier: ''},
    {name: 'Scoop Up', rarity: 'Rare', modifier: ''},
    {name: 'Super Energy Removal', rarity: 'Rare', modifier: ''}];

const BaseSetPokeUncommonList = [
        {name: 'Arcanine', rarity: 'Uncommon', modifier: ''},
        {name: 'Charmeleon', rarity: 'Uncommon', modifier: ''},
        {name: 'Dewgong', rarity: 'Uncommon', modifier: ''},
        {name: 'Dratini', rarity: 'Uncommon', modifier: ''},
        {name: 'Farfetch\'d', rarity: 'Uncommon', modifier: ''},
        {name: 'Growlithe', rarity: 'Uncommon', modifier: ''},
        {name: 'Haunter', rarity: 'Uncommon', modifier: ''},
        {name: 'Ivysaur', rarity: 'Uncommon', modifier: ''},
        {name: 'Jynx', rarity: 'Uncommon', modifier: ''},
        {name: 'Kadabra', rarity: 'Uncommon', modifier: ''},
        {name: 'Kakuna', rarity: 'Uncommon', modifier: ''},
        {name: 'Machoke', rarity: 'Uncommon', modifier: ''},
        {name: 'Magikarp', rarity: 'Uncommon', modifier: ''},
        {name: 'Magmar', rarity: 'Uncommon', modifier: ''},
        {name: 'Nidorino', rarity: 'Uncommon', modifier: ''},
        {name: 'Poliwhirl', rarity: 'Uncommon', modifier: ''},
        {name: 'Porygon', rarity: 'Uncommon', modifier: ''},
        {name: 'Raticate', rarity: 'Uncommon', modifier: ''},
        {name: 'Seel', rarity: 'Uncommon', modifier: ''},
        {name: 'Wartortle', rarity: 'Uncommon', modifier: ''},
        {name: 'Defender', rarity: 'Uncommon', modifier: ''},
        {name: 'Energy Retrieval', rarity: 'Uncommon', modifier: ''},
        {name: 'Full Heal', rarity: 'Uncommon', modifier: ''},
        {name: 'Maintenance', rarity: 'Uncommon', modifier: ''},
        {name: 'PlusPower', rarity: 'Uncommon', modifier: ''},
        {name: 'Pokemon Center', rarity: 'Uncommon', modifier: ''},
        {name: 'Pokemon Flute', rarity: 'Uncommon', modifier: ''},
        {name: 'Pokedex', rarity: 'Uncommon', modifier: ''},
        {name: 'Professor Oak', rarity: 'Uncommon', modifier: ''},
        {name: 'Revive', rarity: 'Uncommon', modifier: ''},
        {name: 'Super Potion', rarity: 'Uncommon', modifier: ''},
        {name: 'Double Colorless Energy', rarity: 'Uncommon', modifier: ''}
];
const BaseSetPokeCommonList = [
    {name: 'Abra', rarity: 'Common', modifier: ''},
    {name: 'Bulbasaur', rarity: 'Common', modifier: ''},
    {name: 'Caterpie', rarity: 'Common', modifier: ''},
    {name: 'Charmander', rarity: 'Common', modifier: ''},
    {name: 'Diglett', rarity: 'Common', modifier: ''},
    {name: 'Doduo', rarity: 'Common', modifier: ''},
    {name: 'Drowzee', rarity: 'Common', modifier: ''},
    {name: 'Gastly', rarity: 'Common', modifier: ''},
    {name: 'Koffing', rarity: 'Common', modifier: ''},
    {name: 'Machop', rarity: 'Common', modifier: ''},
    {name: 'Magnemite', rarity: 'Common', modifier: ''},
    {name: 'Metapod', rarity: 'Common', modifier: ''},
    {name: 'Nidoran', rarity: 'Common', modifier: ''},
    {name: 'Onix', rarity: 'Common', modifier: ''},
    {name: 'Pidgey', rarity: 'Common', modifier: ''},
    {name: 'Pikachu', rarity: 'Common', modifier: ''},
    {name: 'Poliwag', rarity: 'Common', modifier: ''},
    {name: 'Ponyta', rarity: 'Common', modifier: ''},
    {name: 'Rattata', rarity: 'Common', modifier: ''},
    {name: 'Sandshrew', rarity: 'Common', modifier: ''},
    {name: 'Squirtle', rarity: 'Common', modifier: ''},
    {name: 'Starmie', rarity: 'Common', modifier: ''},
    {name: 'Staryu', rarity: 'Common', modifier: ''},
    {name: 'Tangela', rarity: 'Common', modifier: ''},
    {name: 'Voltorb', rarity: 'Common', modifier: ''},
    {name: 'Vulpix', rarity: 'Common', modifier: ''},
    {name: 'Weedle', rarity: 'Common', modifier: ''},
    {name: 'Bill', rarity: 'Common', modifier: ''},
    {name: 'Energy Removal', rarity: 'Common', modifier: ''},
    {name: 'Gust of Wind', rarity: 'Common', modifier: ''},
    {name: 'Potion', rarity: 'Common', modifier: ''},
    {name: 'Switch', rarity: 'Common', modifier: ''}
];
const BaseSetPokeEnergyList = [
    {name: 'Fighting Energy', rarity: 'Energy', modifier: ''},
    {name: 'Fire Energy', rarity: 'Energy', modifier: ''},
    {name: 'Grass Energy', rarity: 'Energy', modifier: ''},
    {name: 'Lightning Energy', rarity: 'Energy', modifier: ''},
];

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
        var cmd = message.substring(1).toLowerCase();
        args = args.splice(1);

        switch(cmd){
            //%ping

            case 'open base set pack':
                
                //Roll energies
                var pokemon = '**Energies:**\n';
                for (let i = 0; i <= 1; i++) {
                    var energyRoll = Math.floor(Math.random() * BaseSetPokeEnergyList.length);
                    pokemon += BaseSetPokeEnergyList[energyRoll].modifier + BaseSetPokeEnergyList[energyRoll].name + '\n';
                }

                //common rolls - 6 times
                pokemon += '\n**Commons:**\n';
                for (let i = 0; i <= 6; i++) {
                    var commonRoll = Math.floor(Math.random() * BaseSetPokeCommonList.length);
                    pokemon += BaseSetPokeCommonList[commonRoll].modifier + BaseSetPokeCommonList[commonRoll].name + '\n';
                }

                //uncommon roll
                pokemon += '\n**Reverse:**\n';
                var uncommonRoll = Math.floor(Math.random() * BaseSetPokeUncommonList.length);
                pokemon += BaseSetPokeUncommonList[uncommonRoll].modifier + BaseSetPokeUncommonList[uncommonRoll].name + '\n';

                //Rare roll
                pokemon += '\n**Rare:**\n';
                var rareRoll = Math.floor(Math.random() * BaseSetPokeRareList.length);
                pokemon += BaseSetPokeRareList[rareRoll].modifier + BaseSetPokeRareList[rareRoll].name;
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