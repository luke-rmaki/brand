import { generate_logo } from "./src/lib/generate_logo.ts";
import { output_CSS } from "./src/lib/output_CSS.ts";
import { output_JSON } from "./src/lib/output_JSON.ts";
import { parse_colors } from "./src/lib/parse_colors.ts";
import colors from "./src/src_assets/prism.json" assert { type: "json" };
import { generate_logo_full } from "./src/lib/generate_logo_full.ts";
import { generate_PNGs } from "./src/lib/generate_PNGs.ts";

async function main() {
  const color_obj = parse_colors(colors);

  await Promise.all([
    output_CSS(color_obj),
    output_JSON(color_obj),
    generate_logo(color_obj[`cerulean-5`], color_obj[`serenity-1`]),
    generate_logo_full(color_obj[`cerulean-5`], color_obj[`serenity-1`]),
  ]);

  await generate_PNGs(color_obj[`gray-12`]);
}

main();
