const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require('moment');
const fs = require('fs');
const Ai = ['./img/1.jpg'];
const prefix = "#";



client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
});




client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by matarawy');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
});




// ping code كود البينج 

client.on('message', message => {
    

     if (message.content === "#ping") {
         if (message.channel.id !== '456494935521099797') return message.reply('#bot  اوامر البوت في روم').then(c => setTimeout(() => c.delete(), 1500));
		 if(!message.channel.guild) return message.reply('** This command only for servers **');
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
  .setFooter(`Turbo Bot .`, client.user.avatarURL);

  message.channel.sendEmbed(embed);
    }
});

//-----------------------------------------------------


//..avatar code كود صورة الشخص

client.on('message', message => {
    
    
    if (message.content.startsWith("#avatar")) {
        
        if (message.channel.id !== '456494935521099797') return message.reply('#bot  اوامر البوت في روم').then(c => setTimeout(() => c.delete(), 1500));
        var mentionned = message.mentions.users.first();
    var mata;
      if(mentionned){
           mata = mentionned;
      } else {
           mata = message.author;
          
      }
      const embed = new Discord.RichEmbed()
      .setFooter('Requested by ' + message.author.username, message.author.avatarURL) 
      .setColor("#fffefe")
      .setURL(mata.avatarURL)
      .setTitle(`:camera:  رابط الصورة`)
      .setImage(mata.avatarURL);
      message.channel.sendEmbed(embed);
    }
});

//--------------------------------------------------------

//..server img code كود صورة السيرفر 
   client.on("message", message => {
       

    const prefix = "#";
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          
          
          if (message.channel.id !== '456494935521099797') return message.reply('#bot  اوامر البوت في روم').then(c => setTimeout(() => c.delete(), 1500));
          
          var catle;
          if (!message.guild.iconURL) {
           catle = 'السيرفر لا يمتلك صورة';
          } else { catle = message.guild.iconURL }
          const embed = new Discord.RichEmbed()
          
          
  
      .setTitle(`This is  ** server **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor('RANDOM')
    .setImage(catle)
    .setURL(message.guild.iconrURL)
                    .setTimestamp();

   message.channel.send({embed});
      }
  });
//-----------------------------------------------------------

//..id code كود الايدي

             client.on('message', message => {
                 
           if (message.content.startsWith(prefix + "user")) {
               
               if (message.channel.id !== '456494935521099797') return message.reply('#bot  اوامر البوت في روم').then(c => setTimeout(() => c.delete(), 1500));
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men;
        } else {
            heg = message.author;
        }
        
        
      message.guild.fetchInvites().then(invs => {
      let personalInvites = invs.filter(i => i.inviter.id === heg.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      
      
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned;
        } else {
            h = message.member;
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(heg.username, heg.avatarURL)
    .addField(': تاريخ دخولك للديسكورد', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)                                                    
    .addField(': تاريخ دخولك لسيرفرنا', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
    .addField(': عدد الدعوات', inviteCount, true)
    .addField('ID :', heg.id, true)
    .setThumbnail(heg.avatarURL)
    .setFooter(heg.tag,'https://orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.png');
    message.channel.send(id);
});
}      
});

//-----------------------------------------------------



//..invites code كود عدد الدعوات



client.on('message', message => {
    
    
let command = message.content.split(" ")[0];
command = command.slice(0);
    
if(command == "#invites"){
    
    if (message.channel.id !== '456494935521099797') return message.reply('#bot  اوامر البوت في روم').then(c => setTimeout(() => c.delete(), 1500));

let men = message.content.split(' ')[1];


        var heg;
        if(men) {
            heg = message.mentions.users.first();
        } else {
            heg = message.author;
        }

      message.guild.fetchInvites().then(invs => {
      let personalInvites = invs.filter(i => i.inviter.id === heg.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);



var dalal = new  Discord.RichEmbed()
.setAuthor(heg.username, heg.avatarURL)
.addField('**: عدد دعواتك **', '**' + inviteCount + '**', true)
.setFooter(`Requested By : ${heg.username}`, heg.avatarURL)
.setColor("#ad6c10");

message.channel.send(dalal);


});
}
});



//--------------------------------------------------------------------





//..draw code كود الدرو

		client.on('message', function (message, member) {
		    

			//var mess = message.content.toLowerCase();

			if(message.content.startsWith(prefix + 'draw')) {
			    
			    if (message.channel.id !== '456494935521099797') return message.reply('#bot  اوامر البوت في روم').then(c => setTimeout(() => c.delete(), 1500));

  let args = message.content.split(" ").slice(1);

				var Canvas = require('canvas');
				var jimp = require('jimp');

        let Image = Canvas.Image,
            canvas = new Canvas(802, 404),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0,0,0)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${Ai[Math.floor(Math.random() * Ai.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 802, 404);

});



                        
                                        let url = message.author.avatarURL.endsWith(".webp") ? message.author.avatarURL.slice(5, -20) + ".png" : message.author.avatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                                //Avatar
                                let Avatar = Canvas.Image;
                                let ava = new Avatar;
                                ava.src = buf;
                                ctx.save();

                                ctx.beginPath();
                                ctx.arc(740, 70, 50, 0, Math.PI*2, true); 
                                ctx.closePath();
                                ctx.clip();
                                ctx.drawImage(ava, 690, 20, 100, 100);
                                ctx.restore();
                        

var fff = args.join("  ").length;


if (fff > 46) {
    
    var catt = 30;
    
} else {
    
    catt = 35;
}


                      //words
                        ctx.font = `bold ${catt}px Helvetica`;
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#000000";
                        ctx.textAlign = "center";
                        ctx.fillText(args.join("  "), 400, 210);
                        
                      //username
                        ctx.font = 'bold 35px Helvetica';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#3f4147";
                        ctx.textAlign = "center";
                        ctx.fillText(message.author.username, 400, 60);



    ctx.beginPath();
    //ctx.lineTo(50, 102);
    //ctx.lineTo(50 + te.width, 102);
    ctx.stroke();
  message.channel.sendFile(canvas.toBuffer());





});
});

}
});

//-------------------------------------------------------------------


//..server info code كود معلومات السيرفر

client.on('message', function(msg) {
    
  if(msg.content.startsWith (prefix  + 'server')) {
      
      if (msg.channel.id !== '456494935521099797') return msg.reply('#bot  اوامر البوت في روم').then(c => setTimeout(() => c.delete(), 1500));
      
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
    const millis = new Date().getTime() - msg.guild.createdAt.getTime();
    const createdAt = millis / 1000 / 60 / 60 / 24;
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .addField(`${msg.guild.name}`,`\`\`منذ ${createdAt.toFixed(0)} يوما \`\``)
    .addField(':earth_africa: ** موقع السيرفر**',`**[ ${msg.guild.region} ]**`,true)
    .addField(':military_medal:** الرتب**',`**[ ${msg.guild.roles.size} ]**`,true)
    .addField(':bust_in_silhouette:** عدد الاعضاء**',`**[ ${msg.guild.memberCount} ]**`,true)
    .addField(':white_check_mark:** عدد الاعضاء الاونلاين**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
    .addField(':pencil:** الرومات الكتابية**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
    .addField(':loud_sound:** رومات الصوت**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
    .addField(':crown:** صاحب السيرفر**',`**[ ${msg.guild.owner} ]**`,true)
    .addField(':id:** ايدي السيرفر**',`**[ ${msg.guild.id} ]**`,true);
    msg.channel.send({embed:embed});
  }
});

//-----------------------------------------------------


client.on("message", msg => {
    
    
      if (msg.author.bot) return;
  let command = msg.content.split(" ")[0];
  command = command.slice();
  let args = msg.content.split(" ").slice(1);
    
    if(command === "#clear") {
        
        
        if (!msg.member.hasPermissions(['MANAGE_ROLES'])) return;
        
        if (!msg.guild) return;
        var vass =  msg.guild.channels.find('name',"log");

    let textxt = args.slice(0).join("");
    if (textxt == "") {
    msg.delete().then;
    msg.delete().then;
    msg.channel.bulkDelete(100);
    msg.channel.send(`:wastebasket: Deleted ` + "`" + '100' + "` messages").then(c => setTimeout(() => c.delete(), 3000));

    
    
    var embed = new Discord.RichEmbed()
       .setTitle(` -100 messages Deleted`)
        .setDescription(`Messages Has Been deleted By \**${msg.author}**\ \n In **${msg.channel}**`)
        .setColor("RANDOM")
        .setTimestamp();
        vass.send({embed}).then(invs => {
    setTimeout(invs.delete(),3000);
    });
    
} else {
    msg.delete().then;
    msg.delete().then;
    msg.channel.bulkDelete(textxt);
    msg.channel.send(`:wastebasket: Deleted ` + "`" + textxt + "` messages").then(c => setTimeout(() => c.delete(), 3000));
    var embed2 = new Discord.RichEmbed()
        .setTitle(` -` + textxt + ` messages Deleted`)
        .setDescription(`Messages Has Been deleted By \**${msg.author}**\ \n In **${msg.channel}**`)
        .setColor("RANDOM")
        .setTimestamp();
    vass.send(embed2);
        

}
}
                          
});



client.on('message', message => {
    
    
    
    if (message.channel.id == '454097876033732609') {

if (message.author.id == '452226172294791168') return;
if (message.author.id == '452226996659814410') return;
if (message.author.id == '452227663990489088') return;
if (message.author.id == '452226695844462592') return;


if (message.content.split(" ").join(' '))  {message.reply('الرجاء عدم كتابة اي رسالة في هذا الروم').then(c => setTimeout(() => c.delete(), 1500));

message.delete();


}
}  
});




client.on('message', message => {
    
    
    
    
    let command = message.content.split(" ")[0];
    command = command.slice(0);
    if (command == ("#mute")) {
               

        const mmss = require('ms');
        let time = message.content.split(' ')[2];
        let guild = message.guild;

        let usermention = message.mentions.users.first();

        if (!message.guild.member(message.author).hasPermission('MUTE_MEMBERS')) {
            return message.reply(':lock: **You** need `MUTE_MEMBERS` Permissions to execute `mute`');
        }

        if (!message.guild.member(client.user).hasPermission('MUTE_MEMBERS')) {
            return message.reply(':lock: **I** need `MUTE_MEMBERS` Permissions to execute `mute`');
        }

        if (message.mentions.users.size < 1) {
            return message.reply('You need to mention someone to mute his!');
        }

        if (message.author.id === usermention.id) {
            return message.reply("You can't mute yourself :wink:");
        }

        if (isNaN[time]) {
            return message.reply('I need a valid time ! look at the Usage! right here: \n **Usage:**`#mute [@mention] [1m] [Reason]`');
        }

        if (!message.guild.member(usermention).bannable) {
            return message.reply('This member is above me in the `role chain` Can\'t mute them');
        }

       if (!time) {
            
            message.guild.member(usermention).addRole(message.guild.roles.find('name',"Muted"));
            
            usermention.send(` ${guild.name}  لقد حصلت على ميوت دائم من سيرفر`);
            
            message.channel.send({embed: {
            color: 3447003,
            author: {
              name: usermention.username,
              icon_url: usermention.avatarURL
            },
            fields: [{
                name: "***Info   :***",
                value: `**Muted :** ${usermention.username}#${usermention.discriminator}\n \n **By :** ${message.author.username} \n \n**Time :** دائم`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: message.author.avatarURL,
              text: `By : ${message.author.username}`
            }
          }
        });
            
        } else {

        usermention.send(`You've just got muted from ${guild.name} \n Time : ${mmss(mmss(time), {long: true})}`);
        message.guild.member(usermention).addRole(message.guild.roles.find('name',"Muted"));
        setTimeout(() => {
            message.guild.member(usermention).removeRole(message.guild.roles.find('name',"Muted"));
            message.channel.send(`${usermention} ** تم انتهاء وقت الميوت حق**`);
            usermention.send(`${message.guild.name} ** تم انتهاء وقت الميوت حقك في سيرفر**`);
        }, mmss(time));
       message.channel.send({embed: {
            color: 3447003,
            author: {
              name: usermention.username,
              icon_url: usermention.avatarURL
            },
            fields: [{
                name: "***Info   :***",
                value: `**Muted :** ${usermention.username}#${usermention.discriminator}\n \n **By :** ${message.author.username} \n \n**Time :** ${mmss(mmss(time), {long: true})}`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: message.author.avatarURL,
              text: `By : ${message.author.username}`
            }
          }
        });
    }
    }
});






client.on('message', message => {
var command = message.content.split(" ")[0];
    command = command.slice(0);
if (command == ("#unmute")) {


let usermention = message.mentions.users.first();

if (!message.guild.roles.find('name',"Muted")) message.reply('لا يوجد رتبة الميوت اصلا يا كبير');

if (!message.guild.member(usermention).roles.find('name',"Muted")) return message.reply('انه لا يمتلك ميوت');

message.guild.member(usermention).removeRole(message.guild.roles.find('name',"Muted"));

message.channel.send(`:white_check_mark:  *بنجاح* ${usermention}  **تم فك الميوت عن**`);


}
});














client.on('message', message => {
    
    
    let command = message.content.split(" ")[0];
    command = command.slice(0);
    if (command == ("#addrole")) {

let usermention = message.mentions.users.first();
let role = message.content.split(' ')[2];
let men = message.content.split(' ')[1];



        if (!message.guild.member(message.author).hasPermission('MANAGE_ROLES')) {
            return message.reply(':lock: **You** need `MANAGE_ROLES` Permissions to execute `mute`');
        }

        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) {
            return message.reply(':lock: **I** need `MANAGE_ROLES` Permissions to execute `mute`');
        }

        if (!role) {
            return message.reply("You must type the role which you want to add this to the member :wink:");
        }
        
        if (!message.guild.roles.find('name',role)) {
            return message.reply("This role don't found in the roles of this server :wink:");
        }
        
        if (men == 'all') {
            
            message.channel.send(message.author + "***  , waiting...until,finishing of adding this role to all members***");
            
            message.guild.members.forEach(m => {
                
                
                m.addRole(message.guild.roles.find('name',role));
            
        });
        }
        
        if (message.mentions.users.size < 1 && men !== 'all') {
             message.reply('You need to mention someone to add role to his!');
            
                    if (message.author.id === usermention.id) {
            return message.reply("You can't add role to yourself :wink:");
        }
        }
        
        
        
        if (message.mentions.users.size == 1) {
        message.guild.member(usermention).addRole(message.guild.roles.find('name',role));
        
        message.channel.send(`:heavy_check_mark:  **This role** \` ${role} \` **was added to**  ${usermention}  **Successfully**`);

}
}
});




client.on('message', message => {
    
    
    let command = message.content.split(" ")[0];
    command = command.slice(0);
    if (command == ("#removerole")) {

let usermention = message.mentions.users.first();
let role = message.content.split(' ')[2];
let men = message.content.split(' ')[1];



        if (!message.guild.member(message.author).hasPermission('MANAGE_ROLES')) {
            return message.reply(':lock: **You** need `MANAGE_ROLES` Permissions to execute `mute`');
        }

        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) {
            return message.reply(':lock: **I** need `MANAGE_ROLES` Permissions to execute `mute`');
        }

        if (!role) {
            return message.reply("You must type the role which you want to remove this to the member :wink:");
        }
        
        if (!message.guild.roles.find('name',role)) {
            return message.reply("This role don't found in the roles of this server :wink:");
        }
        
        if (men == 'all') {
            
            message.channel.send(message.author + "***  , waiting...until,finishing of removeing this role to all members***");
            
            message.guild.members.forEach(m => {
                
                
                m.removeRole(message.guild.roles.find('name',role));
            
        });
        }
        
        if (message.mentions.users.size < 1 && men !== 'all') {
             message.reply('You need to mention someone to remove role to his!');
            
                    if (message.author.id === usermention.id) {
            return message.reply("You can't remove role to yourself :wink:");
        }
        }
        
        
        
        if (message.mentions.users.size == 1) {
        message.guild.member(usermention).removeRole(message.guild.roles.find('name',role));
        
        message.channel.send(`:heavy_check_mark:  **This role** \` ${role} \` **was removeed to**  ${usermention}  **Successfully**`);

}
}
});












client.on('message', message => {



if (message.content == ("السلام عليكم")) {


    message.channel.send(`${message.author} وُعٍلُِيڪم آلُِسلُِآم وُرٍحٍمة آلُِلُِهـ وُبَرٍڪآتهـ :star_and_crescent: 
 

`);
}



});



client.on('ready',  () => {
client.user.setGame(` Pirates in top`);
});



client.login(proccess.env.die);
