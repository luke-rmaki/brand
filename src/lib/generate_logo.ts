import { get_output_path } from "./get_output_path.ts";

export async function generate_logo(
  bracket_color: string,
  letter_color: string,
) {
  const svgTemplate = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <!-- Generated: ${new Date()} -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 373 373" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(1,0,0,1,-35.5083,121.422)">
        <text x="93.158px" y="115.789px" style="font-family:'FiraCode-Regular', 'Fira Code', monospace;font-size:144px;fill:none;stroke:${letter_color};stroke-width:7px;">L</text>
        <text x="93.158px" y="115.789px" style="font-family:'FiraCode-Regular', 'Fira Code', monospace;font-size:144px;fill:${letter_color};">L</text>
    </g>
    <g transform="matrix(1,0,0,1,122.669,121.422)">
        <text x="93.158px" y="115.789px" style="font-family:'FiraCode-Regular', 'Fira Code', monospace;font-size:144px;fill:${letter_color};stroke:${letter_color};stroke-width:7px;">R</text>
    </g>
    <g transform="matrix(1.62304,-0.233229,0.244237,1.69965,-495.327,-223.51)">
        <path d="M438.149,195.789L312.118,389.474" style="fill:${bracket_color};stroke:${bracket_color};stroke-width:2.98px;stroke-linecap:round;stroke-miterlimit:1.5;"/>
    </g>
    <g transform="matrix(1,0,0,1,-195,-113.5)">
        <g transform="matrix(1.40172,0,0,0.826641,-79.9203,52.0077)">
            <path d="M198.947,300L272.662,160.526L198.947,300Z" style="fill:${bracket_color};stroke:${bracket_color};stroke-width:6.95px;stroke-linecap:round;stroke-miterlimit:1.5;"/>
        </g>
        <g transform="matrix(-1.40172,0,0,0.826641,581.142,167.302)">
            <path d="M198.947,300L272.662,160.526L198.947,300Z" style="fill:${bracket_color};stroke:${bracket_color};;stroke-width:6.95px;stroke-linecap:round;stroke-miterlimit:1.5;"/>
        </g>
    </g>
    <g transform="matrix(1,0,0,1,-208.537,-113.5)">
        <g transform="matrix(-1.40172,0,0,0.826641,856.405,52.0077)">
            <path d="M198.947,300L272.662,160.526L198.947,300Z" style="fill:${bracket_color};stroke:${bracket_color};stroke-width:6.95px;stroke-linecap:round;stroke-miterlimit:1.5;"/>
        </g>
        <g transform="matrix(1.40172,0,0,0.826641,195.343,167.302)">
            <path d="M198.947,300L272.662,160.526L198.947,300Z" style="fill:fill:${bracket_color};stroke:${bracket_color};;stroke-width:6.95px;stroke-linecap:round;stroke-miterlimit:1.5;"/>
        </g>
    </g>
</svg>
`;

  try {
    await Deno.writeTextFile(
      `${get_output_path()}logo/logo.svg`,
      svgTemplate,
    );
  } catch (error) {
    console.log(`Error writing logo.svg: ${error}`);
  }
}
