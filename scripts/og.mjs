// Generates public/og.png (1200x630) — run once: `node scripts/og.mjs`
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dir, '../public/og.png');

const display = "'Segoe UI','Helvetica Neue',Arial,sans-serif";
const mono = "'Consolas','DejaVu Sans Mono',monospace";

const grid = Array.from({ length: 19 }, (_, i) => {
  const x = i * 64;
  return `<line x1="${x}" y1="0" x2="${x}" y2="630" stroke="#B4C0D2" stroke-opacity="0.05" stroke-width="1"/>`;
}).join('') + Array.from({ length: 10 }, (_, i) => {
  const y = i * 64;
  return `<line x1="0" y1="${y}" x2="1200" y2="${y}" stroke="#B4C0D2" stroke-opacity="0.05" stroke-width="1"/>`;
}).join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0B0D12"/>
  ${grid}
  <rect width="1200" height="6" fill="#FF6B2C"/>
  <defs>
    <linearGradient id="f" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stop-color="#FF6B2C"/><stop offset="0.5" stop-color="#5a2f17"/><stop offset="1" stop-color="#2a323c"/>
    </linearGradient>
  </defs>
  <g transform="translate(880,150)" fill="none" stroke="url(#f)" stroke-width="2" stroke-linejoin="round">
    <polygon points="100,18 168,58 168,142 100,182 32,142 32,58"/>
    <polygon points="100,18 100,100 168,58"/><polygon points="100,18 100,100 32,58"/>
    <polygon points="168,142 100,100 168,58"/><polygon points="32,142 100,100 32,58"/>
    <polygon points="100,182 100,100 168,142"/><polygon points="100,182 100,100 32,142"/>
  </g>
  <g transform="translate(90,150)">
    <text x="0" y="0" font-family="${mono}" font-size="22" letter-spacing="4" fill="#8A93A1">NOAH // FULL-STACK PRODUCT ENGINEER</text>
    <text x="-4" y="120" font-family="${display}" font-size="118" font-weight="700" fill="#E9EDF4" letter-spacing="-3">I design &amp; <tspan fill="#FF6B2C">ship</tspan></text>
    <text x="-4" y="232" font-family="${display}" font-size="118" font-weight="700" fill="#E9EDF4" letter-spacing="-3">vertical SaaS.</text>
    <g transform="translate(0,320)" font-family="${mono}" font-size="24" letter-spacing="2" fill="#C2C9D4">
      <text x="0" y="0"><tspan fill="#FF6B2C">18</tspan> PRODUCTS</text>
      <text x="270" y="0"><tspan fill="#FF6B2C">07</tspan> MARKETS</text>
      <text x="540" y="0"><tspan fill="#FF6B2C">100%</tspan> TYPESCRIPT</text>
    </g>
    <text x="0" y="392" font-family="${mono}" font-size="20" letter-spacing="3" fill="#5A626E">santana64.github.io/portefolio</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('OG written:', out);
