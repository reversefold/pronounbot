exports.run = (client, message, args) => {
	if(args[0]){
		var toRole = message.guild.roles.find(role => (role.name.substring(0,3) == "[P]" && role.name.toLowerCase().includes(args[0])));
		if(toRole){
			var toName = toRole.name;
			var prRole = message.member.roles.find(role => role.name.substring(0,3) == "[P]");
			if(prRole){
				var prName = prRole.name;
				message.member.addRole(toRole).catch(console.error);
				message.member.removeRole(prRole).catch(console.error);
				message.channel.send(message.member + ", your pronouns have been changed from " + prName.substring(4) + " to " + toName.substring(4) + ".");
			}else{
				message.member.addRole(toRole).catch(console.error);
				message.channel.send(message.member + ", your pronouns have been set to " + toName.substring(4) + ".");
			}
		}else{
			message.channel.send(message.member + ', the pronoun role "' + args[0] + '" does not exist! Please request it or try again.');
		}						
	}else{
		message.channel.send(message.member + ", please specify the pronoun that you would like to set for yourself!");
	}
}