//Command looks for users that joined the server and were not allocated the Member Role

//Command looks for users that joined the server and were not allocated the Member Role

const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const ListEmbed = new Discord.RichEmbed()
        .setTitle('Updating users without member role:')
        
        m = client.guilds.map(function (obj) {
            return obj.members;
        });
        console.log(m.lebgth,"m.length")
        for (var i = 0; i < m.length; i++) {
            
        let addField =
            m[i].map(function (obj) {
                return (obj._roles == "") ? ListEmbed.addField(`${obj.user.username}`, `User ID: ${obj.user.id}`) : console.log("Already has a role - ", obj.user.username);
            })
        
        let test = m[i].map(function (obj) {
            return (obj._roles == "") ? obj.user.id : "";
        });

        test = test.filter(Boolean)

        

        function addMemberRole(mbr) {
            console.log(mbr)
            let role = message.guild.roles.find("name", "Member");
            message.guild.fetchMember(mbr).then(guildMember => {
                guildMember.addRole(role).catch(console.error);
            })
        }

        for (indi = 0; indi < test.length; indi++) { 
            console.log(test[indi], "About to assign role for this user")
            addMemberRole(test[indi])

        }


        console.log(test.length, "test.length")
    }
         

    client.users.get('179604866807627777').send(ListEmbed);   
};

exports.help = {
  name: 'roleUser'
};