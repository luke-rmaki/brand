import { ColorObj } from "@types";
import { get_output_path } from "./get_output_path.ts";

export async function output_CSS(color_obj: ColorObj) {
  const colors = Object.entries(color_obj);
  const color_arr = colors.map((color) => `--${color[0]}: ${color[1]};`);
  const css = `
  /* Generated ${new Date()} */
:root {
  ${color_arr.join(`\n`)}
}
`;

  try {
    await Deno.writeTextFile(`${get_output_path()}colors.css`, css);
  } catch (error) {
    console.log(`Error writing colors.css: ${error}`);
  }
}
