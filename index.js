const Discord = require("discord.js");
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]}, {partials: ["MESSAGE", "CHANNEL", "REACTION", "MANAGE_ROLES"] });
require("dotenv").config();

const prefix = "!";

const fs = require("fs");
const { execute } = require("./commands/clear");

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
};

bot.on("ready", async () => {
    console.log("bot opérationnel")
    bot.user.setStatus("idle");
    bot.user.setActivity('faire une maintenance', { type: "PLAYING" });
    setTimeout(() => {
        bot.user.setStatus('online')
        bot.user.setActivity("🥪casse-croute d'urgence", { type: "PLAYING" });
    }, 100);
});

bot.on("ready", message => {
    setInterval(function() {
        var date = new Date();
        var heure = date.getHours();
        var minute = date.getMinutes();
        var seconde = date.getSeconds();
        if (heure === 4){
            bot.commands.get('dailyloot').execute(bot, message, Discord);       
        }
    }, 60000*60*24);
});

bot.on("guildMemberAdd", member => {
    bot.channels.cache.get('906236251751981117').send(`${member.displayName} ! Bienvenue dans le #Loseryb !`);
    member.roles.add('905801218897625088');
});

bot.on("messageCreate", message => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'clear'){
        bot.commands.get('clear').execute(message, args);
    }
    if (command === 'up'){
        bot.commands.get('perso').execute(bot, message, args);
    }
    if (command === 'lvlup'){
        bot.commands.get('lvlup').execute(bot, message, args);
    }
});

bot.login(process.env.BOT_TOKEN);