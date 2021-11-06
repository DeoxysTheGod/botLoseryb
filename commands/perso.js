const { MessageAttachment } = require("discord.js");
const fs = require("fs");

module.exports = {
    name: 'perso',
    description: 'show perso upgrade items',
    async execute(bot, message, args) {
        const attachement = new MessageAttachment("img/" + args[0] + ".png"); 
        if(!args[0]) return message.reply("il manque le nom du personnage");
        if(fs.existsSync("img/" + args[0] + ".png")) return message.reply({ files: [attachement] });
        else return message.reply("ce personnage n'existe pas");
    },
};