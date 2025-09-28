import { TechfestLabel } from "@/data/techfest";
import { getTechfestData } from "./get-techfest-data";
import { getAllEvents } from "./get-all-events";

export const getTechfestDataWithEvents = async (v: string) => {
  const techfest = getTechfestData(v as TechfestLabel);
  if (!techfest) return null;
  const preEvents =
    !techfest.preEvents || techfest.preEvents?.length === 0
      ? []
      : techfest.preEvents?.map((e) => e.eventId);
  const mainEvents =
    !techfest.mainEvents || techfest.mainEvents?.length === 0
      ? []
      : techfest.mainEvents?.map((e) => e.eventId);
  const postEvents =
    !techfest.postEvents || techfest.postEvents?.length === 0
      ? []
      : techfest.postEvents?.map((e) => e.eventId);

  const allEvents = await getAllEvents([
    ...preEvents,
    ...postEvents,
    ...mainEvents,
  ]);

  return {
    ...techfest,
    preEvents: techfest.preEvents?.map((e) => ({
      ...e,
      event: allEvents.find((ev) => ev.id === e.eventId),
    })),
    postEvents: techfest.postEvents?.map((e) => ({
      ...e,
      event: allEvents.find((ev) => ev.id === e.eventId),
    })),
    mainEvents: techfest.mainEvents?.map((e) => ({
      ...e,
      event: allEvents.find((ev) => ev.id === e.eventId),
    })),
  };
};
