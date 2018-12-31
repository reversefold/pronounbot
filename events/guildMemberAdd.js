module.exports = (client, member) => {
	if(!member.bot){
		const welcomeChannel = member.guild.channels.find(channel => channel.name === client.config.welcomeChannel);
		const faqChannel = member.guild.channels.find(channel => channel.name === client.config.faqChannel);
		const rolesChannel = member.guild.channels.find(channel => channel.name === client.config.rolesChannel);
		const rulesChannel = member.guild.channels.find(channel => channel.name === client.config.rulesChannel);
		welcomeChannel.send("Welcome, " + member + "! Please read the " + faqChannel + ", " + rolesChannel + ", and " + rulesChannel + " channels. When you are ready, please leave an introduction and the roles you want here. " + 'Pronoun roles can be set with "/pronoun set PronounToSet" in any channel where you can send messages.');
	}
}