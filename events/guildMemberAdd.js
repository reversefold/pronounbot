module.exports = (client, member) => {
	if(!member.bot){
		const welcomeChannel = member.guild.channels.find(channel => channel.name === client.config.welcomeChannel);
		var msgString = "Welcome, " + member + "! Please read the ";
		for(var k in client.config.welcomeChannelList){
			msgString += member.guild.channels.find(channel => channel.name === client.config.welcomeChannelList[k]);
			if(k < client.config.welcomeChannelList.length - 2){
				msgString += ", ";
			}else if(k < client.config.welcomeChannelList.length - 1){
				msgString += ", and ";
			}
		}
		welcomeChannel.send( msgString.substring(-6) + " channels. When you are ready, please leave an introduction and the roles you want here. " + 'Pronoun roles can be set with "/pronoun set PronounToSet" in any channel where you can send messages.');
	}
}