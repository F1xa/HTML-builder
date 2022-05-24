const fs = require('fs');
const path = require('path');
const process = require('process');

const linkFolderSecret = path.join(__dirname, 'secret-folder');

const informationAboutFile = (file) => {
  const linkFile = path.join(linkFolderSecret, file);
  const type = path.extname(file);
  const name = path.basename(file, type);

  fs.stat(linkFile, (err, stats) => {
    const size = stats['size'] / 1000;
    if (stats.isFile()) process.stdout.write(`${name} - ${type.slice(1)} - ${size}kb \n`);
 });
};

fs.readdir(linkFolderSecret, { withFileTypes: true }, (err, files) => {
  if (err) console.log(err);
  else files.forEach((file) => informationAboutFile(file.name));
});