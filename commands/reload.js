exports.run = (client, message, args) => {
	var admin = message.member.roles.find(role => role.name == "Admin");
	if(admin){
		var commands = client.commands.keyArray();
		for(var k in commands){
			var commandName = commands[k];
			delete require.cache[require.resolve(`./${commandName}.js`)];
			client.commands.delete(commandName);
			const props = require(`./${commandName}.js`);
			client.commands.set(commandName, props);
			console.log(`The command ${commandName} has been reloaded`);
		}
	}else{
		message.channel.send(message.member + ", you do not have permision to run this command!");
	}
}