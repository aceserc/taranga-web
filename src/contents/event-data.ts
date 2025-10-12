export type Event = {
  eventId: string;
  href?: string;
};

export type Partner = {
  // sponsors etc
  name: string;
  logo: string;
  href?: string;
};

export type Events = Array<Event>;

export type TarangaLabel = `v${number}.0`;
export type TarangaValue = {
  path: string;
  startDate: string; //AD not BS
};
export type TarangaData = Record<TarangaLabel, TarangaValue>;

export type CurrentTaranga = TarangaValue & {
  label: TarangaLabel;
};

export const TARANGA_DATA: TarangaData = {
  "v1.0": {
    path: "/v1.0/",
    startDate: "2026/1/10",
  },
};

const CURRENT_TARANGA_LABEL: TarangaLabel = "v1.0";

export const CURRENT_TARANGA: CurrentTaranga = {
  label: CURRENT_TARANGA_LABEL,
  ...TARANGA_DATA[CURRENT_TARANGA_LABEL],
};
