require("dotenv").config()
const { Intents } = require('discord.js')
const { GCommandsClient } = require("gcommands");

const client = new GCommandsClient({
    cmdDir: "commands/",
    eventDir: "events/",
    language: "english",
    commands: {
        slash: 'both',
        context: 'false',
        prefix: 'z?'
    },
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_INTEGRATIONS]
});

client.on("ready", () => {
    console.log("som")
    setInterval(() => {
        const ram = process.memoryUsage().rss / 1024 / 1024;
        console.log(`[RAM] ${ram.toFixed(2)}mb`);
    }, 3000);
    client.tickets = {
        category: process.env.ticketCategory,
        closedCategory: process.env.ticketClosedCategory,
        archiveCategory: process.env.archiveCategory,
        claimedCategory: process.env.claimedCategory,
        moderatorRole: process.env.ticketModeratorRole
    }    
})

client
    .on("log", console.log)
    .on("debug", console.log)

client.login(process.env.token)
