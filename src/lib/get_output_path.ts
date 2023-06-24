import { join } from "@path";

export function get_output_path() {
  return join(Deno.cwd(), "./assets/");
}
