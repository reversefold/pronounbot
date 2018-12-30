const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
 
client.on("ready", () => {
	console.log("I am ready!");
});
 
client.on("message", (message) => {
	if(message.content.substring(0,1) == config.prefix && !message.author.bot){
		var cmd = message.content.toLowerCase().split(/ +/g);
		var args = cmd.slice(1, cmd.length);
		cmd = cmd[0];
		if(cmd == "/pronoun"){
			message.delete();
			switch(args[0]) {
				/*case "check":
					if(args[1]){
						var myRole = message.guild.roles.find(role => role.name.toLowerCase() === args[1]);
						if(myRole){
							message.channel.send('You have the role "'+myRole.name+'"!');
						}else{
							message.channel.send('You do not have the role "'+args[1]+'"!');
						}
					}else{
						message.channel.send("Please specify a role to check!");
					}
					break;*/
				case "set":
					var roles = message.guild.roles;
					for (var k in roles) {
						message.channel.send(k.name);
					}
					break;
				default:
					//message.channel.send('The command "' + cmd + " " + args[0] + ' {...}" is not supported yet.');
					break;
			}
		}
	}	
});
 
client.login(config.token);