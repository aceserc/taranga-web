import { techfestData, TechfestLabel } from "@/data/techfest";

export const getTechfestData = (version: TechfestLabel) => {
  return techfestData[version] ?? null;
};
