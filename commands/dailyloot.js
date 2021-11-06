jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
var date = new Date();
var result = jours[date.getDay()];

const { MessageEmbed } = require('discord.js');

if (result === 'Lundi', 'Jeudi'){
    url = 'https://www.genshin-impact.fr/wp-content/uploads/2021/08/lunjeu.jpg'
}
if (result === 'Mardi', 'Vendredi'){
    url = 'https://www.genshin-impact.fr/wp-content/uploads/2021/08/marven.jpg'
}
if (result === 'Mercredi', 'Samedi'){
    url = 'https://www.genshin-impact.fr/wp-content/uploads/2021/08/mersam.jpg'
}
if (result === 'Dimanche'){
    url = 'https://www.genshin-impact.fr/wp-content/uploads/2021/08/dim.jpg'
}

const dailyEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setAuthor('P.A.I.M.O.N')
    .setTitle(result + ' Daily Loot')
    .setImage(url);

module.exports = {
    name: 'dailyloot',
    description: 'send daily loot',
    async execute(bot, message, args, channels, id){
        bot.channels.cache.get('906232760551755786').send({ embeds: [dailyEmbed]});
    }  
}