import convert from "../../../../../../utils/svg-to-png/mod.ts";
import { get_output_path } from "./get_output_path.ts";

export async function generate_PNGs(background: string) {
  const logo_path = `${get_output_path()}logo/logo.svg`;
  const logo_full_path = `${get_output_path()}logo/logo-full.svg`;

  const sizes = [16, 32, 64, 128, 256, 512];

  // loop through sizes and generate PNGs
  for (const size of sizes) {
    const options = {
      width: size,
      height: size,
      background_color: background,
    };
    await convert(logo_path, `${get_output_path()}logo-${size}.png`, options);
  }

  for (const size of sizes) {
    const options = {
      width: size,
      height: size / 2,
      background_color: background,
    };
    await convert(
      logo_full_path,
      `${get_output_path()}logo-full-${size}.png`,
      options,
    );
  }
}
