import { currentTechfest, CurrentTechfestStatus } from "@/data/techfest";

export const getCurrentTechfestStatus = (): CurrentTechfestStatus => {
  const today = new Date().getTime();
  const countdownStartsFromTime = new Date(
    currentTechfest.countdownStartsFrom
  ).getTime();
  const currentTechfestStartsFromTime = new Date(
    currentTechfest.startDate
  ).getTime();
  const currentTechfestEndsAtTime = new Date(currentTechfest.endDate).getTime();

  // Check if the event has already completed
  if (currentTechfestEndsAtTime < today) return "completed";

  // Check if the event has started
  if (currentTechfestStartsFromTime < today) return "started";

  // Check if we are in the countdown phase
  if (countdownStartsFromTime < today) return "counting";

  return "completed";
};
