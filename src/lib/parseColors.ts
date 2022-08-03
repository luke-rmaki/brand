export function parseColors(colors) {
  const names = Object.keys(colors);

  const colorObj = {};

  names.forEach((name) => {
    colors[name].forEach((color, index) => {
      colorObj[`${name}-${index}`] = color;
    });
  });

  return colorObj;
}
