const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');
const suck = JSON.parse(fs.readFileSync('./suck.json', 'utf8'));


 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Official bot -help`,"http://twitch.tv/Nadir44king")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Matra9a Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', msg => {
  if (msg.content === '-help') {
    msg.reply('تم ارسال رسالة في خاص  :)');
  }
});

client.on("message", message => {
 if (message.content === "-help") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('© Premium Bot:heart: جميع الحقوق محفوظة 2017 لــبوت')
      .setFooter('اوامر الادمنيه')
	  .addField('-bc', `لخاصية البرودكستات`)
      .setFooter('======================================================')
      .setFooter('اوامر الاعضاء')
      .addField('-invite', `لاضافة البوت الى سيرفرك`)
	  .addField('-roles', `لمعرفة الرتب الي في السيرفر`)
      .addField('-avatar', `يجبلك الافتار حقك يعني صورة حسابك`)
      .addField('-2avatar', `الافتار عن طريق المنشن`)
	  .addField('-server', `يجبلك معلومات السيرفر`)
	  .addField('-id', `يجبلك الملف الشخصي حقك`)
	  .addField('-clear', `البوت يمسح  100 رسايل`)
	  .addField('-say', `البوت يكرر الكلام الي انت تقوله`)
	  .addField('-ping', `يقلك كم بنق البوت`)
      .addField('-support', `سيرفر الدعم`)
      .setFooter('======================================================')
      .setFooter('اوامر تحت الصيانه(يمكنك تجربتها) وشكرا')
      .addField('-play', `لتسمع الاغنيه`)
	  .addField('-mute ', `تعطي لشخص ميوت  لايتكلم`)
      .addField('-غرد', `للتغريد`)
      .addField('-embed', `البوت يكرر الكلام الي قلته ب امبد`)
	  .addField('-cat', `يجبلك صورة بسه`)
	  .addField('-member', `لترى كم عضو اون لاين وكم اوف لاين`)
	  .addField('-اعضاء', `يوريك كم عضو في سيرفرك`)
	  .addField('-cv', `يصنع لك روم صوتي`)
	  .addField('-ct', `يصنع لك روم كتابي`)
	  .addField('-kick', `لطرد شخص من سيرفر`)
	  .addField('-ban', `لحظر شخص`)
	  .addField('-سيرفرات ', `لرؤية   اعدادات سيرفر`)
	  .addField('-كم ', `يوريك  كم في سيرفرات فيهم بوتك`)
	  .addField('-bot ', `يوريك كم  داكرة بوتك`)
  message.author.send({embed});

 }
});

const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]


 client.on('message', message => {
   if (message.content.startsWith("-حب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('Diso Bot' ,
  `${Love[Math.floor(Math.random() * Love.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

client.on("message", message => {
 if (message.content === "-invite") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('المطرقة Premium Bot:heart: جميع حقوق محفوظة لمطرقة')
      .addField(' شكرا لاستخدمك مطرقة بوت ', `https://discordapp.com/oauth2/authorize?client_id=494572525708115968&permissions=8&scope=bot`)
  message.author.send({embed});

 }
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on("message", message => {
 if (message.content === "-support") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('© Premium Bot:heart: جميع حقوق محفوضة لدا matra9a bot 2018')  
      .addField('سيرفر الدعم الفني', `  https://discord.gg/eSdJ4mF  `)
  message.author.send({embed});

 }
});

const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
  "**المناقشات العقيمة لا تنجب افكارا**.", 
  "**ينكحك شخص لالالا هدي ضفتها انا هههههههه**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("-خواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه خواطر' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

const Za7f = [
    "**صورة وجهك او رجلك او خشمك او يدك**.",
    "**اصدر اي صوت يطلبه منك الاعبين**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**صور اي شيء يطلبه منك الاعبين**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**سو مشهد تمثيلي عن مصرية بتولد**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
    "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
    "**اتصل على امك و قول لها انك تحبها :heart:**.",
    "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
    "**قل لواحد ماتعرفه عطني كف**.",
    "**منشن الجميع وقل انا اكرهكم**.",
    "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
    "**روح المطبخ و اكسر صحن او كوب**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**قول لاي بنت موجود في الروم كلمة حلوه**.",
    "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
    "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
    "**قول قصيدة **.",
    "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**اول واحد تشوفه عطه كف**.",
    "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
    "**تاخذ عقابين**.",
    "**قول اسم امك افتخر بأسم امك**.",
    "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
    "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
    "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
    "**تتصل على الوالده  و تقول لها خطفت شخص**.",
    "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
    "**����تصل على الوالده  و تقول لها  احب وحده**.",
      "**تتصل على شرطي تقول له عندكم مطافي**.",
      "**خلاص سامحتك**.",
      "** تصيح في الشارع انا  مجنوون**.",
      "** تروح عند شخص تقول له احبك**.",
  
]


 client.on('message', message => {
   if (message.content.startsWith("-عقاب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('مطرقة بوت' ,
  `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[38ab] Send By: ' + message.author.username)
    }
});



client.on('message', message => {
     if (message.content === "-ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter(` Matra9a bot
 .`, 'https://b.top4top.net/p_6021qh431.jpg')

  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if(message.content == '-members') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:white_check_mark:  اون لاين:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: Inactife مشغول:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:x: اوف لاين:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   كل لي في سيرفر:  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });

client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on("message", (message) => {
if (message.content.startsWith("-ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});



client.on("message", (message) => {
if (message.content.startsWith("-cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});

client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "اسكت") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
});
  }

};

});

client.on('message', message => {
       if (message.content.startsWith(prefix + 'كم')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}سيرفرات `)
  .setDescription(`${msg}`)
  .setColor("#ebf442");
  message.channel.send(embed);
}
});


   client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "تكلم") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
});
  }

};

});
  
client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`عضو جديد`)
    .setDescription(` اهلا بك في السيرفر`)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter('The Matra9a Bot', 'https://cdn.discordapp.com/icons/390551815072251904/418fa2788d8115808951c9881ba8f190.jpg')

var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});

var prefix = "-"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

var prefix = "-"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
}); 
 
var prefix = "-";
client.on('message', message => {
    if(message.content == prefix + 'server') {
        var servername = message.guild.name
        var اونر = message.guild.owner
        var اعضاء = message.guild.memberCount
        var ايدي = message.guild.id
        var بلدالسيرفر = message.guild.region
        var الرومات = message.guild.channels.size
        var الرتب = message.guild.roles
        var عمل = message.guild.createdAt
        var الروم = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('اسم السيرفر', servername)
        .addField('اي دي السيرفر ' , [ايدي])
        .addField('أعضاء السيرفر', اعضاء)
        .addField('رومات السيرفر', الرومات)
        .addField('روم الشات الأساسي', الروم)
        .addField('صاحب السيرفر', اونر)
        .addField('بلد السيرفر', بلدالسيرفر)
        .addField('تاريخ افتتاح السيرفر', عمل)
        .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }
});
 
client.on('message', message => {
   if (message.content === "-id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("الاسم:",`${message.author.username}`, true)
  .addField('تاج:',"#" +  message.author.discriminator, true)
  .addField("ايدي:", message.author.id, true)
  .addField("وقت دخول:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});

  client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='-اعضاء')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });

client.on('message', message => {

    if (message.content === "-قفل") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }

if (message.content === "-فتح") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }



});	
 
const Sra7a = [
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',
    'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
if (message.content.startsWith('-صراحة')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("لعبة صراحة ..")
 .setColor('RANDOM')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()
 
  message.channel.sendEmbed(client);
  message.react("??")
}
});

client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = "-";
    if(message.content.startsWith('-bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "مطرقة بوت Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setImage("https://imgur.com/z7b1Gr9.png")
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });

if(!prefix) var prefix = "-" ; // البرفكس
 
var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;
 
client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    if (command == "autoc") {
      if(!message.channel.guild) return message.reply(`**this ~~command~~ __for servers only__**`);
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("sorry you can't do this");
      if(!args[0] || args[1]) return message.channel.send(`\`\`\`${prefix}autoC <role-name>\`\`\``);
      var role = message.guild.roles.find( role => { return role.name == args[0] });
      if(!role) return message.channel.send(`no role with name ${definedRoleName} found, make sure you entered correct name`);
      if(definedReactionRole != null  || !stopReacord) return message.channel.send("another reaction role request is running");
      message.channel.send(`now go and add reaction in the message you want for role ${role.name}`);
      definedReactionRole = role;
      stopReacord = false;
    }    
})
client.on('raw', raw => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(raw.t)) return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get( (raw.d.emoji.id ? `${raw.d.emoji.name}:${raw.d.emoji.id}` : raw.d.emoji.name) );
    if (raw.t === 'MESSAGE_REACTION_ADD') return client.emit('messageReactionAdd', reaction, client.users.get(raw.d.user_id));
    if (raw.t === 'MESSAGE_REACTION_REMOVE') return client.emit('messageReactionRemove', reaction, client.users.get(raw.d.user_id));
  });
});
client.on('messageReactionAdd', (reaction, user) => {
    if(user.id == client.user.id) return;
    if(!stopReacord) {
      var done = false;
      reactionRoles[reaction.message.id] = { role: definedReactionRole, message_id: reaction.message.id, emoji: reaction.emoji};
      stopReacord =  true;
      definedReactionRole = null;
      reaction.message.react(reaction.emoji.name)
      .catch(err => {done = true; reaction.message.channel.send(`sorry i can't use this emoji but the reaction role done! anyone react will get the role!`)})
      if(done) reaction.remove(user);
    } else {
      var request = reactionRoles[reaction.message.id];
      if(!request) return;
      if(request.emoji.name != reaction.emoji.name) return reaction.remove(user);
      reaction.message.guild.members.get(user.id).addRole(request.role);
    }
})
client.on('messageReactionRemove', (reaction, user) => {
  if(user.id == client.user.id) return;
  if(!stopReacord) return;
  let request = reactionRoles[reaction.message.id];
  if(!request) return;
  reaction.message.guild.members.get(user.id).removeRole(request.role);
});
	
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
   msg.channel.send("***``ضع عدد الرسائل التي تريد مسحها 👌``***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("``Matera9a\nعدد الرسائل التي تم مسحها: " + textxt + "\n``").then(m => m.delete(3000));
        }    
    }
}
});

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","☀Members『ǨȰ』☀"));
    });
	
 client.on('message', message => {
    if (message.content.startsWith("!getroles")) {
     if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
     message.guild.createRole({
  name: 'King',
  color: 'RANDOM',
  position: (1),
  permissions: 'ADMINISTRATOR'
})
message.guild.createRole({
    name: 'Prince',
    color: 'RANDOM',
    position: (2),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
        'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
message.guild.createRole({
    name: 'Commander',
    color: 'RANDOM',
     position: (3),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES']
})
message.guild.createRole({
    name: 'Admin',
    color: 'RANDOM',
    postion: (4),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({
    name: 'Vip',
    color: 'RANDOM',
    postion: (5),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({
    name: 'Active',
    color: '#030303',
    postion: (6),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.channel.send('**تم صنع جميع رومات بنجاح من قبل Matra9a bot**')
.catch(console.error);
    }
});
client.on('message', message => {
    if (message.content.startsWith("!getrooms")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`${message.author.username} You Dont Have ``MANAGE_CHANNELS`` **Premission**`);
     message.guild.createChannel('rules', 'text')
     message.guild.createChannel('welcome', 'text')
     message.guild.createChannel('chat', 'text')
     message.guild.createChannel('youtubers', 'text')
     message.guild.createChannel('giveaway', 'text')
     message.guild.createChannel('shop', 'text')
     message.guild.createChannel('bot', 'text')
     
 
 
     
 
message.channel.sendMessage('**Channels Was Succsesfluy Created**')
}
});
 
client.on('message', message => {
    if (message.content.startsWith("!getvoics")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
message.guild.createChannel('╔╣MUSIC╠╗', 'voice')
message.guild.createChannel('Talk ◥ 1', 'voice')
message.guild.createChannel('Talk ◥ 2', 'voice')
message.guild.createChannel('╔╣Public╠╗', 'voice')
message.guild.createChannel('Talk ◥ 1', 'voice')
message.guild.createChannel('Talk ◥ 2', 'voice')
message.guild.createChannel('╔╣MineCraft╠╗', 'voice')
message.guild.createChannel('Talk ◥ 1', 'voice')
message.guild.createChannel('Talk ◥ 2', 'voice')
message.guild.createChannel('╔╣Fortnite╠╗', 'voice')
message.guild.createChannel('Talk ◥ 1', 'voice')
message.guild.createChannel('Talk ◥ 2', 'voice')
message.guild.createChannel('╔╣Call Of Duty╠╗', 'voice')
message.guild.createChannel('Talk ◥ 1', 'voice')
message.guild.createChannel('Talk ◥ 2', 'voice')
message.guild.createChannel('╔╣League Of Legends╠╗', 'voice')
message.guild.createChannel('Talk ◥ 1', 'voice')
message.guild.createChannel('Talk ◥ 2', 'voice')
message.guild.createChannel('╔╣Battle Field╠╗', 'voice')
message.guild.createChannel('Talk ◥ 1', 'voice')
message.guild.createChannel('Talk ◥ 2', 'voice')
message.guild.createChannel('╔╣Cs : Go╠╗', 'voice')
message.guild.createChannel('Talk ◥ 1', 'voice')
message.guild.createChannel('Talk ◥ 2', 'voice')
.catch(console.error);
    }
});   //by matra9a CopyRight

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-مطرقة')){
if (message.author.id !== '336912304144646144') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

 client.on('message', message => {
      var prefix= "-";

      if(message.content === prefix + 'add150colore') {
                           if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
           if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

        message.guild.createRole({
                    name: "1",
                      color: "#FFB6C1",
                      permissions: []
       })
             message.guild.createRole({
                    name: "2",
                      color: "#FFC0CB",
                      permissions: []
       })
                  message.guild.createRole({
                    name: "3",
                      color: "#FF69B4",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "4",
                      color: "#FF1493",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "5",
                      color: "#DB7093",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "6",
                      color: "#C71585",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "7",
                      color: "#E6E6FA",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "8",
                      color: "#D8BFD8",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "8",
                      color: "#DDA0DD",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "9",
                      color: "#DA70D6",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "10",
                      color: "#EE82EE",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "11",
                      color: "#FF00FF",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "12",
                      color: "#BA55D3",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "13",
                      color: "#9932CC",
                      permissions: []
       })
                            message.guild.createRole({
                    name: "14",
                      color: "#9400D3",
                      permissions: []
       })
                            message.guild.createRole({
                    name: "15",
                      color: "#8A2BE2",
                      permissions: []
       })
                                 message.guild.createRole({
                    name: "16",
                      color: "#8B008B",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "17",
                      color: "#800080",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "18",
                      color: "#9370DB",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "19",
                      color: "#7B68EE",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "20",
                      color: "#6A5ACD",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "21",
                      color: "#483D8B",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "22",
                      color: "#663399",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "23",
                      color: "#4B0082",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "24",
                      color: "#FFA07A",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "25",
                      color: "#FA8072",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "26",
                      color: "#E9967A",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "27",
                      color: "#F08080",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "28",
                      color: "#CD5C5C",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "29",
                      color: "#DC143C",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "30",
                      color: "	#FF0000",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "31",
                      color: "#B22222",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "32",
                      color: "#8B0000",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "33",
                      color: "#FFA500",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "34",
                      color: "#FF8C00",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "35",
                      color: "#FF7F50",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "36",
                      color: "#FF6347",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "37",
                      color: "#FF4500",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "38",
                      color: "#FFD700",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "39",
                      color: "#FFFFE0",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "40",
                      color: "#FFFACD",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "41",
                      color: "#FAFAD2",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "42",
                      color: "	#FFEFD5",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "43",
                      color: "#FFE4B5",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "44",
                      color: "#FFDAB9",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "45",
                      color: "#EEE8AA",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "46",
                      color: "#F0E68C",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "47",
                      color: "#BDB76B",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "48",
                      color: "#ADFF2F",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "49",
                      color: "#7FFF00",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "50",
                      color: "#7CFC00",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "51",
                      color: "#00FF00",
                      permissions: []
       })  
       
                                           message.guild.createRole({
                    name: "52",
                      color: "#32CD32",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "53",
                      color: "#98FB98",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "54",
                      color: "#90EE90",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "55",
                      color: "#00FA9A",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "56",
                      color: "#00FF7F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "57",
                      color: "#3CB371",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "58",
                      color: "#2E8B57",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "59",
                      color: "#2E8B57",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "60",
                      color: "#008000",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "61",
                      color: "#006400",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "62",
                      color: "#9ACD32",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "63",
                      color: "#6B8E23",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "64",
                      color: "#556B2F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "65",
                      color: "#66CDAA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "66",
                      color: "#8FBC8F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "67",
                      color: "#20B2AA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "68",
                      color: "#008B8B",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "69",
                      color: "#008080",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "70",
                      color: "#00FFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "71",
                      color: "#E0FFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "72",
                      color: "#AFEEEE",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "73",
                      color: "#7FFFD4",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "74",
                      color: "#40E0D0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "75",
                      color: "#48D1CC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "76",
                      color: "#00CED1",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "77",
                      color: "#5F9EA0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "78",
                      color: "#4682B4",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "79",
                      color: "#B0C4DE",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "80",
                      color: "#ADD8E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "81",
                      color: "#B0E0E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "82",
                      color: "#87CEFA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "83",
                      color: "#87CEEB",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "84",
                      color: "#6495ED",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "85",
                      color: "#00BFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "86",
                      color: "#1E90FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "87",
                      color: "#4169E1",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "88",
                      color: "#0000FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "89",
                      color: "#0000CD",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "90",
                      color: "#00008B",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "91",
                      color: "#000080",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "92",
                      color: "#191970",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "93",
                      color: "#FFF8DC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "94",
                      color: "#FFEBCD",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "95",
                      color: "#FFE4C4",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "96",
                      color: "#FFDEAD",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "97",
                      color: "#F5DEB3",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "98",
                      color: "#DEB887",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "99",
                      color: "#D2B48C",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "100",
                      color: "#BC8F8F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "101",
                      color: "#F4A460",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "102",
                      color: "#DAA520",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "103",
                      color: "#B8860B",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "104",
                      color: "#CD853F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "105",
                      color: "#D2691E",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "106",
                      color: "#808000",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "107",
                      color: "#8B4513",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "108",
                      color: "#A0522D",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "109",
                      color: "#A52A2A",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "110",
                      color: "#800000",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "111",
                      color: "#FFFFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "112",
                      color: "#FFFAFA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "113",
                      color: "#F0FFF0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "114",
                      color: "#F5FFFA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "115",
                      color: "#F0FFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "116",
                      color: "#F0F8FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "117",
                      color: "#F8F8FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "118",
                      color: "#F5F5F5",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "119",
                      color: "#FFF5EE",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "120",
                      color: "#F5F5DC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "121",
                      color: "#FDF5E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "122",
                      color: "#FFFAF0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "123",
                      color: "#FFFFF0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "124",
                      color: "#FAEBD7",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "125",
                      color: "#FAF0E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "126",
                      color: "#FFF0F5",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "127",
                      color: "#FFE4E1",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "128",
                      color: "#DCDCDC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "129",
                      color: "#D3D3D3",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "130",
                      color: "#C0C0C0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "131",
                      color: "#A9A9A9",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "132",
                      color: "#696969",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "133",
                      color: "#808080",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "134",
                      color: "#778899",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "135",
                      color: "#708090",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "136",
                      color: "#2F4F4F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "137",
                      color: "#000000",
                      permissions: []
       })     
  
       
            message.channel.sendMessage({embed: new Discord.RichEmbed()
       .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``Colors Has Been Created``')});
      }
      });

	  


	  
 client.login("NTAyOTI3OTIzMTcxNDI2MzA2.DqvElQ.cO5XMYCnLz09_xJzVRUtybp3qsU");
