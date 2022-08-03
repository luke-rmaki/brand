import { outputCSS } from './lib/outputCSS';
import { outputJSON } from './lib/outputJSON';
import { parseColors } from './lib/parseColors';
import colors from './prism.json';

async function main() {
  const colorObj = parseColors(colors);

  await Promise.all([outputCSS(colorObj), outputJSON(colorObj)]);
}

main();
