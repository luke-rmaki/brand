#!/usr/bin/env node
const { build } = require(`estrella`);

build({
  entry: `src/main.ts`,
  outfile: `build/main.js`,
  platform: `node`,
  sourcemap: `inline`,
  bundle: true,
  external: [`puppeteer`],
});
