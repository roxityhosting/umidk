const { createCanvas, loadImage } = require('canvas');
exports.run = async (Discord, client, message, args) => {
  const user = message.author;
		try {
			const base = await loadImage('https://cdn.glitch.com/37d136a2-b194-46e8-9c53-85d01e1839e2%2Frainbow.png?1528475934136');
			const { body } = await user.avatarURL;
			const avatar = await (body);
			const canvas = createCanvas(avatar.width, avatar.height);
			const ctx = canvas.getContext('2d');
			ctx.drawImage(avatar, 0, 0);
			ctx.drawImage(base, 0, 0, avatar.width, avatar.height);
			return message.channel.send({ files: [{ attachment: canvas.toBuffer(), name: 'rainbow.png' }] });
		} catch (err) {
			return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
}