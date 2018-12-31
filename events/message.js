module.exports = (client, message) => {
	if (!message.author.bot && message.content.indexOf(client.config.prefix) == 0){
		const args = message.content.slice(client.config.prefix.length).trim().toLowerCase().split(/ +/g);
		const command = args.shift();
		const cmd = client.commands.get(command);		
		if (cmd){
			message.delete();
			cmd.run(client, message, args);
		}else{
			message.channel.send(message.member + ', the command "' + command + '" is not supported yet. \nFor a list of available commands, enter "' + client.config.prefix + ' help"');
		}
	}  
};