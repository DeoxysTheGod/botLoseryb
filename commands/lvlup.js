const { MessageAttachment, Message } = require("discord.js");

module.exports = {
    name: 'lvlup',
    description: 'show lvl upgrade cost',
    async execute(bot, message, args) {
        const attachement = new MessageAttachment("./img/all_lvl_up_cost.png")

        message.reply({ files: [attachement] })
    },
};