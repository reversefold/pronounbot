exports.run = (client, message, args) => {
	var msgString = "\nThe available commands are:\n";
	var commands = client.commands.keyArray();
	for(var k in commands){
		var name = commands[k];
		if(!client.config.hiddenCommands.includes(name)){
			msgString += "\t" + name + "\n";
		}
	}
	msgString += '\nTo see command details, enter "' + client.config.prefix + ' help CommandName"';
	message.channel.send(message.member + msgString);
}