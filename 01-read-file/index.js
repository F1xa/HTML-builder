const fs = require('fs');
const path = require('path');
const process = require('process');
const { stdout } = require('process');

const linkFile = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(linkFile, {encoding: 'utf-8'});
const readableStream = fs.createReadStream(linkFile, 'utf8');

readableStream.on('data', (chunk) => stdout.write(chunk));

stream.on('readable', () => {
  let chunk;

  while (null !== (chunk = stream.read())) {
    process.stdout.write(chunk);
  }
});