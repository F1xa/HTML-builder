const fs = require('fs');
const path = require('path');
const { stdout } = require('process');
const linkFile = path.join(__dirname, 'text.txt');
const readableStream = fs.createReadStream(linkFile, 'utf8');
readableStream.on('data', (chunk) => stdout.write(chunk));

