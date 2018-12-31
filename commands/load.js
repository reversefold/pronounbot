exports.run = (client, message, args) => {
	var admin = message.member.roles.find(role => role.name == "Admin");
	if(admin){
		if(args[0]){
			var commandName = args[0];
			const props = require(`./${commandName}.js`);
			console.log(`Attempting to load command "${commandName}"`);
			client.commands.set(commandName, props);
		}else{
			message.channel.send(message.member + ", please specify a command to load!");
		}
	}else{
		message.channel.send(message.member + ", you do not have permision to run this command!");
	}
}