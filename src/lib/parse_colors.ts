import { ColorObj, ColorPalette } from "@types";

export function parse_colors(colors: ColorPalette) {
  const names = Object.keys(colors);

  const color_obj: ColorObj = {};

  names.forEach((name) => {
    colors[name].forEach((color, index) => {
      color_obj[`${name}-${index}`] = color;
    });
  });

  return color_obj;
}
