exports.run = (client, message, args) => {
	if(args[0]){
		if(args[1]){
			const requestChannel = message.member.guild.channels.find(channel => channel.name === client.config.requestChannel)
			requestChannel.send("[P] " + args[0] + " | " + args[1] + " | " + message.member);
			message.channel.send(message.member + ", your request has been sent for review. You will be notified when your request has been accepted.");
		}else{
			message.channel.send(message.member + ", please specify a role color for your request.");
		}
	}else{
		message.channel.send(message.member + ", please specify the pronoun that you would like to request.");
	}
}