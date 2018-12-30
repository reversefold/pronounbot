const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
 
client.on("ready", () => {
	console.log("I am ready!");
});
 
client.on("message", (message) => {
	if(message.content.substring(0,1) == config.prefix && !message.author.bot){
		var cmd = message.content.split(" ");
		var args = cmd.slice(1, cmd.length);
		cmd = cmd[0];
		if(cmd == "/pronoun"){
			switch(args[0]) {
				case "check":
					message.channel.send("Checking roles");
					break;
				default:
					message.channel.send('The command "' + args[0] + ' {...}" is not supported yet.');
					break;
			}
		}
	}	
});
 
client.login(config.token);