const { MessageSelectMenu, MessageActionRow } = require(`discord.js`);

const create_mh = (array) => {
	if (!array) throw new Error(`The options were not provided! Make sure you provide all the options!`);
	if (array.length < 0) throw new Error(`The array has to have atleast one thing to select!`);
	let select_menu;
	let id = `help-menus`;
	let menus = [];
	const emo = {
		developer: '❗',
		premium: '<a:verify:799539329235025923>',
		general: '⚙️',
		system: '🔧'
	};

	array.forEach((cca) => {
		let name = cca;
		let sName = `${name.toUpperCase()}`;
		let tName = name.toLowerCase();
		let fName = name.toUpperCase();

		return menus.push({
			label: sName,
			description: `${tName} commands!`,
			value: fName
		});
	});

	let smenu1 = new MessageSelectMenu()
		.setCustomId(id)
		.setPlaceholder(`Choose the command category`)
		.addOptions(menus);

	select_menu = new MessageActionRow().addComponents(smenu1);

	return {
		smenu: [ select_menu ],
		sid: id
	};
};

module.exports = create_mh;
