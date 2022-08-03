import { writeFile } from 'fs/promises';

export async function outputCSS(colorObj) {
  const colors = Object.entries(colorObj);
  const colorArr = colors.map((color) => `--${color[0]}: ${color[1]};`);
  const css = `
:root {
  ${colorArr.join(`\n`)}
}
`;

  try {
    await writeFile(`./colors.css`, css);
  } catch (error) {
    console.log(`Error writing colors.css: ${error}`);
  }
}
