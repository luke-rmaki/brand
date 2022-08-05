import { copyFile } from 'fs/promises';

export async function copyProfile() {
  const profile1 = `profile_1.jpg`;
  const profile2 = `profile_2.jpg`;
  const outputPath = `./assets/`;

  try {
    await copyFile(`./src/assets/${profile1}`, `${outputPath}/${profile1}`);
    await copyFile(`./src/assets/${profile2}`, `${outputPath}/${profile2}`);
  } catch (err) {
    console.error(`Error copying profile: ${err}`);
  }
}
