import { writeFile } from 'fs/promises';

export async function generateLogoFull(
  bracketColor: string,
  letterColor: string
) {
  const svgTemplate = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 800 600" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g transform="matrix(1,0,0,1,-9.84333,209.203)">
        <text x="93.158px" y="115.789px" style="font-family:'FiraCode-Regular', 'Fira Code', monospace;font-size:64px;fill:${letterColor};">Luke Ruokaism&#228;ki</text>
    </g>
    <g transform="matrix(1,0,0,1,-198.947,-5.68434e-14)">
        <g transform="matrix(1.40172,0,0,0.826641,-79.9203,52.0077)">
            <path d="M198.947,300L272.662,160.526L198.947,300Z" style="fill:none;stroke:${bracketColor};stroke-width:6.95px;"/>
        </g>
        <g transform="matrix(-1.40172,0,0,0.826641,581.142,167.302)">
            <path d="M198.947,300L272.662,160.526L198.947,300Z" style="fill:none;stroke:${bracketColor};stroke-width:6.95px;"/>
        </g>
    </g>
    <g transform="matrix(1,0,0,1,222.463,-5.68434e-14)">
        <g transform="matrix(-1.40172,0,0,0.826641,856.405,52.0077)">
            <path d="M198.947,300L272.662,160.526L198.947,300Z" style="fill:none;stroke:${bracketColor};stroke-width:6.95px;"/>
        </g>
        <g transform="matrix(1.40172,0,0,0.826641,195.343,167.302)">
            <path d="M198.947,300L272.662,160.526L198.947,300Z" style="fill:none;stroke:${bracketColor};stroke-width:6.95px;"/>
        </g>
    </g>
</svg>

`;

  try {
    await writeFile(`./assets/logo/logo-full.svg`, svgTemplate);
  } catch (error) {
    console.log(`Error writing logo-full.svg: ${error}`);
  }
}
