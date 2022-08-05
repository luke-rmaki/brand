import { generateLogo } from './lib/generateLogo';
import { outputCSS } from './lib/outputCSS';
import { outputJSON } from './lib/outputJSON';
import { parseColors } from './lib/parseColors';
import colors from './assets/prism.json';
import { generateLogoFull } from './lib/generateLogoFull';
import { generatePNGs } from './lib/generatePNGs';
import { copyProfile } from './lib/copyProfile';

async function main() {
  const colorObj = parseColors(colors);

  await Promise.all([
    outputCSS(colorObj),
    outputJSON(colorObj),
    generateLogo(colorObj[`cerulean-5`], colorObj[`serenity-1`]),
    generateLogoFull(colorObj[`cerulean-5`], colorObj[`serenity-1`]),
    copyProfile(),
  ]);

  await generatePNGs(colorObj[`gray-12`]);
}

main();
