const Discord = require('discord.js');
const client = new Discord.Client();
client.on("ready", () => {
console.log("Welcome Again !");

 })
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم يا قلبي 
لو سمحت طالبق طلب تكقا ادخل السيرفر
    https://discord.gg/tWqsMy  
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم يا قلبي 
لو سمحت طالبق طلب تكقا ادخل السيرفر
 https://discord.gg/tWqsMy  
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)

client.on("ready", () => {

let channel = client.channels.get("494555815672414218"); 
       setInterval(() => {
channel.send(Math.random().toString(36).substring(7))

     
      
},10);
});

})
client.login("NDkxOTMwODAxODM2MTMwMzA1.Do1NIw.1-CsakC1bE7AQyNDoWFaCDZR_pU");
