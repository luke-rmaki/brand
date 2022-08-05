import { writeFile } from 'fs/promises';

export async function outputJSON(colorObj: {}) {
  try {
    await writeFile(`./assets/colors.json`, JSON.stringify(colorObj, null, 2));
  } catch (err) {
    console.error(`Error writing colors.json: ${err}`);
  }
}
