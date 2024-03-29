const fs = require('fs');
const path = require('path');
const readline = require('readline');

const filePath = path.join(__dirname, './source/main.json');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Please input cdn domain (start with http | https): ', (replaceUrl) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('read file content error: ', err);
      return;
    }

    const replacedData = data.replace(/\.\//g, `${replaceUrl}`);

    const outputPath = path.join(__dirname, './dist/main.json');
    // 将替换后的数据写回文件
    fs.writeFile(outputPath, replacedData, 'utf8', (err) => {
      if (err) {
        console.error('write file content error', err);
        return;
      }
      console.log('task finished!');
    });
  });
});



