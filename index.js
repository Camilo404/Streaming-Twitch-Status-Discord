require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
    console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});

client.on('ready', async () => {

    const rpc = new Discord.RichPresence()
        .setApplicationId('817229550684471297')
        .setType('STREAMING')
        .setURL(`https://www.youtube.com/watch?v=uR7URJZHhhY`)
        .setDetails(`Sono Bisque Doll wa Koi wo Suru`)
        .setName(`Sono Bisque Doll wa Koi wo Suru`)
        .setState(`彼女, お借りします`)
        .setParty({
            max: 840,
            current: 689,
            id: Discord.getUUID(),
        })
        .setAssetsLargeImage(`mp:attachments/914640467516350475/1020034989263421520/tumblr_9775a580d9c74924201f393dd817bf36_8cc8d6f6_540.gif`)
        .setAssetsLargeText(`connected`)
        .setAssetsSmallImage(`mp:attachments/914640467516350475/1020021414042013757/check.gif`)
        .setAssetsSmallText(`﹄🅽🅸🅶🅷🆃🆁🅰🅸🅳﹃`)
        .addButton(`Watch 👀`, `https://beta.crunchyroll.com/es/series/GQWH0M9N8/my-dress-up-darling`)
        .addButton(`Join 🛬`, `https://discord.gg/8hWZtmSNx5`);
    client.user.setActivity(rpc.toJSON());

    console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.TOKEN);