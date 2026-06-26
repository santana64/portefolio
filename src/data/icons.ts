// Monoline icon paths (24x24, stroke=currentColor). Wrap with iconSvg().
export const ICONS: Record<string, string> = {
  'ChantierDevis': "<path d='M7 3h7l4 4v14H7z'/><path d='M14 3v4h4'/><path d='M9 12h6M9 16h5'/>",
  'SignalCore V8': "<circle cx='12' cy='12' r='3'/><circle cx='12' cy='12' r='8'/><path d='M12 12l5-5'/>",
  'QualiPilot': "<path d='M12 3l7 3v6c0 5-7 9-7 9s-7-4-7-9V6z'/><path d='M9 12l2 2 4-4'/>",
  'BailFlow': "<path d='M4 11l8-6 8 6'/><path d='M6 10v9h12v-9'/><path d='M10 19v-5h4v5'/>",
  'RGE Pilot': "<path d='M13 3L5 13h6l-1 8 8-11h-6z'/>",
  'AutoPilot URSSAF': "<path d='M4 19V11M9 19V6M14 19v-9M19 19V8'/><path d='M3 21h18'/>",
  'AutoNet': "<circle cx='12' cy='12' r='8'/><path d='M15 9.5a3.5 3.5 0 100 5M8 11h5M8 13h5'/>",
  'Vert La Planète': "<path d='M5 19c0-8 6-14 14-14 0 8-6 14-14 14z'/><path d='M5 19c4-4 8-6 12-8'/>",
  'AICheck': "<rect x='7' y='7' width='10' height='10' rx='1'/><path d='M10 7V4M14 7V4M10 20v-3M14 20v-3M7 10H4M7 14H4M20 10h-3M20 14h-3'/>",
  'TrustCenter AI': "<rect x='5' y='11' width='14' height='9' rx='2'/><path d='M8 11V8a4 4 0 018 0v3'/>",
  'Forge Brief': "<path d='M9 18h6M10 21h4'/><path d='M12 3a6 6 0 00-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 00-4-10z'/>",
  'aegis': "<path d='M12 3l9 5-9 5-9-5z'/><path d='M3 13l9 5 9-5'/>",
  'VerticalLead OS': "<path d='M3 5h18l-7 8v6l-4-2v-4z'/>",
  'Vertical Lead Finder': "<circle cx='11' cy='11' r='6'/><path d='M20 20l-4.3-4.3'/>",
  'Cheetah Time': "<path d='M3 4v16'/><path d='M6 7h11M6 12h14M6 17h8'/>",
  'INKR': "<path d='M4 20l3-1L18 8l-2-2L5 17z'/><path d='M14 6l4 4'/>",
  '学 Mandarin': "<path d='M5 5h14v10H9l-4 4z'/><path d='M9 9h6M9 12h4'/>",
  'Noah Odyssey': "<circle cx='12' cy='12' r='8'/><path d='M4 12h16M12 4c3 3 3 13 0 16M12 4c-3 3-3 13 0 16'/>",
  'Arkoryn': "<path d='M10 14V5a2 2 0 014 0v9a4 4 0 11-4 0z'/><path d='M12 14V8'/><path d='M16 6h3M16 10h3'/>",
};
export function iconSvg(name: string): string {
  const inner = ICONS[name] || "<circle cx='12' cy='12' r='7'/>";
  return "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round'>" + inner + "</svg>";
}
