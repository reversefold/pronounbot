exports.run = (client, message, args) => {
	var msgString;
	if(args[0]){
		var command = client.commands.get(args[0]);
		if(command){
			msgString = "\nCommand: " + command + "\nUsage: <USAGE>\nDescription: <DESCRIPTION>";
		}else{
			msgString = ', "' + args[0] + '" is not a valid command. Please enter ' + client.config.prefix + " help for a list of commands.";
		}
	}else{
		msgString = "\nThe available commands are:\n";
		var commands = client.commands.keyArray();
		for(var k in commands){
			var name = commands[k];
			if(!client.config.hiddenCommands.includes(name)){
				msgString += "\t" + name + "\n";
			}
		}
		msgString += '\nTo see command details, enter "' + client.config.prefix + ' help CommandName"';
	}
	message.channel.send(message.member + msgString);
}