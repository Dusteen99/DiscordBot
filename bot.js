/*const cards = [{Name: 'Alakazam', Rarity: 'Rare', Modifier: 'Holo ', Set: 'baseSet'},
{Name: 'Blastoise', Rarity: 'Rare', Modifier: 'Holo ', Set: 'baseSet' },
{Name: 'Chansey', Rarity: 'Rare', Modifier: 'Holo ', Set: 'baseSet' },
{Name: 'Charizard', Rarity: 'Rare', Modifier: 'Holo ', Set: 'baseSet'},
{Name: 'Clefairy', Rarity: 'Rare', Modifier: 'Holo ', Set: 'baseSet'},
{Name: 'Gyarados', Rarity: 'Rare', Modifier: 'Holo ', Set: 'baseSet'},
{Name: 'Hitmonchan', Rarity: 'Rare', Modifier: 'Holo ', Set: 'baseSet'},
{Name: 'Machamp', Rarity: 'Rare', Modifier: 'Holo ', Set: 'baseSet'},
{Name: 'Magneton', Rarity: 'Rare', Modifier: 'Holo ', Set: 'baseSet'},
{Name: 'Mewtwo', Rarity: 'Rare', Modifier: 'Holo ', Set: 'baseSet'},
{Name: 'Nidoking', Rarity: 'Rare', Modifier: 'Holo ', Set: 'baseSet'},
{Name: 'Ninetales', Rarity: 'Rare', Modifier: 'Holo ', Set: 'baseSet'},
{Name: 'Poliwrath', Rarity: 'Rare', Modifier: 'Holo ', Set: 'baseSet'},
{Name: 'Raichu', Rarity: 'Rare', Modifier: 'Holo ', Set: 'baseSet'},
{Name: 'Venusaur', Rarity: 'Rare', Modifier: 'Holo ', Set: 'baseSet'},
{Name: 'Zapdos', Rarity: 'Rare', Modifier: 'Holo ', Set: 'baseSet'},
{Name: 'Beedrill', Rarity: 'Rare', Modifier: '', Set: 'baseSet'},
{Name: 'Dragonair', Rarity: 'Rare', Modifier: '', Set: 'baseSet'},
{Name: 'Dugtrio', Rarity: 'Rare', Modifier: '', Set: 'baseSet'},
{Name: 'Electabuzz', Rarity: 'Rare', Modifier: '', Set: 'baseSet'},
{Name: 'Electrode', Rarity: 'Rare', Modifier: '', Set: 'baseSet'},
{Name: 'Pidgeotto', Rarity: 'Rare', Modifier: '', Set: 'baseSet'},
{Name: 'Clefairy Doll', Rarity: 'Rare', Modifier: '', Set: 'baseSet'},
{Name: 'Computer Search', Rarity: 'Rare', Modifier: '', Set: 'baseSet'},
{Name: 'Devolution Spray', Rarity: 'Rare', Modifier: '', Set: 'baseSet'},
{Name: 'Impostor Professor Oak', Rarity: 'Rare', Modifier: '', Set: 'baseSet'},
{Name: 'Item Finder', Rarity: 'Rare', Modifier: '', Set: 'baseSet'},
{Name: 'Lass', Rarity: 'Rare', Modifier: '', Set: 'baseSet'},
{Name: 'Pokemon Breeder', Rarity: 'Rare', Modifier: '', Set: 'baseSet'},
{Name: 'Pokemon Trader', Rarity: 'Rare', Modifier: '', Set: 'baseSet'},
{Name: 'Scoop Up', Rarity: 'Rare', Modifier: '', Set: 'baseSet'},
{Name: 'Super Energy Removal', Rarity: 'Rare', Modifier: '', Set: 'baseSet'},
{Name: 'Arcanine', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Charmeleon', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Dewgong', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Dratini', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Farfetch\'d', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Growlithe', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Haunter', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Ivysaur', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Jynx', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Kadabra', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Kakuna', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Machoke', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Magikarp', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Magmar', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Nidorino', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Poliwhirl', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Porygon', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Raticate', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Seel', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Wartortle', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Defender', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Energy Retrieval', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Full Heal', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Maintenance', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'PlusPower', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Pokemon Center', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Pokemon Flute', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Pokedex', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Professor Oak', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Revive', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Super Potion', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Double Colorless Energy', Rarity: 'Uncommon', Modifier: '', Set: 'baseSet'},
{Name: 'Abra', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Bulbasaur', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Caterpie', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Charmander', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Diglett', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Doduo', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Drowzee', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Gastly', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Koffing', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Machop', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Magnemite', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Metapod', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Nidoran', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Onix', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Pidgey', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Pikachu', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Poliwag', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Ponyta', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Rattata', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Sandshrew', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Squirtle', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Starmie', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Staryu', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Tangela', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Voltorb', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Vulpix', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Weedle', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Bill', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Energy Removal', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Gust of Wind', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Potion', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Switch', Rarity: 'Common', Modifier: '', Set: 'baseSet'},
{Name: 'Fighting Energy', Rarity: 'Energy', Modifier: '', Set: 'baseSet'},
{Name: 'Fire Energy', Rarity: 'Energy', Modifier: '', Set: 'baseSet'},
{Name: 'Grass Energy', Rarity: 'Energy', Modifier: '', Set: 'baseSet'},
{Name: 'Lightning Energy', Rarity: 'Energy', Modifier: '', Set: 'baseSet'}];*/

//Requirements

var Discord = require('discord.io');
const mySecret = process.env['DISCORD_TOKEN'];
var admin = require("firebase-admin");
var firebase = require("firebase/app");
var firestor = require("firebase/firestore");
const serviceAccount = require("./firebase.json");

firebase.initializeApp({ /* ... */ });

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const DB = admin.firestore();

var logger = require('winston');

var auth = require('./auth.json');

const dbRef = new FireSQL(firebase.firestore());


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
    //Our bot needs to know if it will execute a command
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
                    var BaseSetPokeCommonList = fireSQL.query(`SELECT Name, Modifier FROM CardList WHERE Set = 'baseSet' And Rarity = 'common'`);


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