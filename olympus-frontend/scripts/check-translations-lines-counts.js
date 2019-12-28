// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const translationsFolder = './src/translations';

const files = fs.readdirSync(translationsFolder);
const translations = files.filter(file => file.endsWith('.json'));

const linesCount = {};
let firstCount;

translations.forEach(translationFile => {
  const filePath = translationsFolder + '/' + translationFile;
  const data = fs.readFileSync(filePath, 'utf8');
  const json = JSON.parse(data);

  linesCount[translationFile] = Object.keys(json).length;

  if (!firstCount) {
    firstCount = linesCount[translationFile];
  }
});

const allHasSameLength = Object.values(linesCount).every(count => count === firstCount);

if (!allHasSameLength) {
  throw new Error(JSON.stringify(linesCount));
}
