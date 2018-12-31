const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const SelfReloadJSON = require('self-reload-json');

const client = new Discord.Client();
var config = new SelfReloadJSON('./config.json');
//REMEMBER TO REMOVE SelfReloadJSON
client.config = config;

fs.readdir("./events/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith(".js")) return;
		const event = require(`./events/${file}`);
		let eventName = file.split(".")[0];
		console.log(`Attempting to load event "${eventName}"`);
		client.on(eventName, event.bind(null, client));
	});
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command "${commandName}"`);
    client.commands.set(commandName, props);
  });
});

client.login(config.token);