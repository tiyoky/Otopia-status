const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);

    setInterval(() => {
        client.user.setPresence({
            activities: [{
                name: "otopia soon…",
                type: "STREAMING",
                url: "https://discord.gg/hufWHfhnfR"
            }]
        });
    }, 1000);
});

client.on('messageCreate', message => {
    if (message.content === '+test' && message.member.permissions.has('ADMINISTRATOR')) {
        message.reply('salut');
    }
});

client.login(process.env.TOKEN);

