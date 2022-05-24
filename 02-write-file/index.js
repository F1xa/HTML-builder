const fs = require('fs');
const path = require('path');
const { stdin: input, stdout: output } = require('process');
const readline = require('readline');

const linkResult = path.join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(linkResult, {encoding: 'utf-8'});
const rl = readline.createInterface({ input, output });

output.write(`Добро пожаловать! Можете начать вводить свой текст: \n`);

const exit = () => {
  rl.close();
  writeStream.end();
  output.write(`До свидания! \n`);
}

rl.on('line', (input) => {
  if (input.indexOf('exit') === -1) writeStream.write(`${input} \n`);
  else exit();
});

rl.on('SIGINT', () => exit());