/**
 * CENTRAL EVENT DATA
 * ------------------
 * Replace the placeholder strings below with the real INQUIZEST 3.0 event
 * information. Nothing else in the codebase needs to change.
 *
 * accent  -> one of the logo-derived accent keys (see ACCENTS)
 * prop    -> which illustrated graphic prop composition is used (0-5)
 */

export const ACCENTS = ["red", "cyan", "yellow", "violet", "lime", "orange"] as const;
export type Accent = (typeof ACCENTS)[number];

export type EventEntry = {
  id: string;
  /** Two digit index shown as huge editorial numeral */
  index: string;
  title: string;
  /** short expressive label, e.g. "QUIZ", "STAGE", "SOLO" */
  kind: string;
  blurb: string;
  when: string;
  where: string;
  cta: string;
  accent: Accent;
  prop: number;
};

const RAW: Array<Partial<EventEntry> & { index: string }> = Array.from(
  { length: 20 },
  (_, i) => ({ index: String(i + 1).padStart(2, "0") }),
);

export const EVENTS: EventEntry[] = RAW.map((r, i) => ({
  id: `event-${r.index}`,
  index: r.index,
  title: r.title ?? "EVENT NAME",
  kind: r.kind ?? ["QUIZ", "STAGE", "SOLO", "SQUAD", "OPEN", "FINALE"][i % 6],
  blurb:
    r.blurb ??
    "Placeholder description. Swap this line for the real brief — rules, format, and what a team needs to bring with them.",
  when: r.when ?? `DAY ${((i % 3) + 1).toString().padStart(2, "0")} · ${9 + (i % 8)}:30`,
  where: r.where ?? `VENUE ${String.fromCharCode(65 + (i % 5))}`,
  cta: r.cta ?? "REGISTER",
  accent: r.accent ?? ACCENTS[i % ACCENTS.length],
  prop: r.prop ?? i % 6,
}));

export const WHEEL_A = EVENTS.slice(0, 10);
export const WHEEL_B = EVENTS.slice(10, 20);
