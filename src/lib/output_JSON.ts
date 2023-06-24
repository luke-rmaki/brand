import { ColorObj } from "@types";
import { get_output_path } from "./get_output_path.ts";

export async function output_JSON(colorObj: ColorObj) {
  try {
    await Deno.writeTextFile(
      `${get_output_path()}colors.json`,
      JSON.stringify(colorObj, null, 2),
    );
  } catch (err) {
    console.error(`Error writing colors.json: ${err}`);
  }
}
