/** Palette names defined in src/styles/palettes.css. Keep the two in sync. */
export const PALETTES = ['slate', 'forest', 'plum', 'midnight'] as const;

export type Palette = (typeof PALETTES)[number];
