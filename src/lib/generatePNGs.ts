import { convertFile } from 'convert-svg-to-png';

export async function generatePNGs(background: string) {
  const baseOptions = {
    background,
    puppeteer: {
      headless: true,
    },
  };

  const logoPath = `./assets/logo/logo.svg`;
  const logoFullPath = `./assets/logo/logo-full.svg`;

  const sizes = [16, 32, 64, 128, 256, 512];

  const promises = sizes.map((size) => {
    const options = {
      ...baseOptions,
      width: size,
      height: size,
      outputFilePath: `./assets/logo/logo-${size}.png`,
    };

    return convertFile(logoPath, options);
  });
  const promisesFull = sizes.map((size) => {
    const options = {
      ...baseOptions,
      width: size,
      height: size,
      outputFilePath: `./assets/logo/logo-full-${size}.png`,
    };

    return convertFile(logoFullPath, options);
  });

  await Promise.all([...promises, ...promisesFull]);
  // await Promise.all([
  //   convertFile(logoPath, { height: 16, width: 16, ...baseOptions }),
  // ]);
}
