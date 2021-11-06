module.exports = {
    name: 'clear',
    description: 'Clear messages !',
    async execute(message, args) {
        if(!args[0]) return message.reply("Il manque le nombre de messages que tu veux effacer !");
        if(isNaN(args[0])) return message.reply("mets un vrai nombre stp !");

        if(args[0] > 100) return message.reply("tu ne peux pas en supprimer plus de 100 !");
        if(args[0] < 1) return message.reply("je veux bien en supprimer 0 mais cela ne sert à rien !");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        })
    }
}