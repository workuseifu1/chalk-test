const chalk = require("chalk");

const message = `Hello ${chalk.yellow("World")}`;
const test = chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
);
console.log(message);
console.log(test);