const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "-";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`BC Bot- Script By : Shadowe|مطرقة`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Shadowe|مطرقة ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-bc | Shadowe|مطرقة`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



client.login("NDg3MzM0NzMxMzQ4ODM2MzUy.DnMLTg.wAPcdGGic9C_8oY62VGIQbnza0c");
