const Discord = require('discord.js');
const Matra9a = new Discord.Client();
const fs = require('fs');
const suck = JSON.parse(fs.readFileSync('./suck.json', 'utf8'));
const prefix = "!";


Matra9a.on('ready', () => {
  console.log(`Logged in as ${Matra9a.user.tag}!`);
Matra9a.user.setGame(`Rainbow Bot Matra9a`,"http://twitch.tv/Nadir44king")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${Matra9a.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${Matra9a.guilds.size} " ]`);
  console.log(`Users! [ " ${Matra9a.users.size} " ]`);
  console.log(`channels! [ " ${Matra9a.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Matra9a Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

Matra9a.on("message", message => {
    fs.writeFile('./suck.json', JSON.stringify(suck));
});
Matra9a.on('ready', () => {
    setInterval(function(){
        Matra9a.guilds.forEach(g => {
            if (suck[g.id]) {
                if (suck[g.id].role) {
                    var role = g.roles.get(suck[g.id].role);
                    if (role) {
                        role.edit({color : "RANDOM"});
                    };
                };
            };
        });
    }, 10000);
});
Matra9a.on("message", message => {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    if (message.channel.type !== "text") return message.reply("This Command Is Only Allowed In Servers");
    var args = message.content.split(" ");
    var command = args[0].slice(prefix.length);
    switch(command) {
        case "rainbow" :
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("no no");
        message.guild.createRole({name : "rainbow", color : "RANDOM"}).then(r => {
            r.edit({color : "RANDOm"});
            suck[message.guild.id] = {role : r.id};
        });
    };
});


client.login(process.env.BOT_TOKEN);
