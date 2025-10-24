import { TechfestLabel } from "@/data/techfest";
import { getTechfestData } from "./get-techfest-data";
import { getAllEvents } from "./get-all-events";

export const getTechfestDataWithEvents = async (v: string) => {
  const taranga = getTechfestData(v as TechfestLabel);
  if (!taranga) return null;
  const preEvents =
    !taranga.preEvents || taranga.preEvents?.length === 0
      ? []
      : taranga.preEvents?.map((e) => e.eventId);
  const mainEvents =
    !taranga.mainEvents || taranga.mainEvents?.length === 0
      ? []
      : taranga.mainEvents?.map((e) => e.eventId);
  const postEvents =
    !taranga.postEvents || taranga.postEvents?.length === 0
      ? []
      : taranga.postEvents?.map((e) => e.eventId);

  const allEvents = await getAllEvents([
    ...preEvents,
    ...postEvents,
    ...mainEvents,
  ]);

  return {
    ...taranga,
    preEvents: taranga.preEvents?.map((e) => ({
      ...e,
      event: allEvents.find((ev) => ev.id === e.eventId),
    })),
    postEvents: taranga.postEvents?.map((e) => ({
      ...e,
      event: allEvents.find((ev) => ev.id === e.eventId),
    })),
    mainEvents: taranga.mainEvents?.map((e) => ({
      ...e,
      event: allEvents.find((ev) => ev.id === e.eventId),
    })),
  };
};
