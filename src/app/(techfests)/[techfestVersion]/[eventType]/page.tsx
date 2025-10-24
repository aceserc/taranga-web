import Error404 from "@/components/blocks/404";
import { Badge } from "@/components/ui/badge";
import { TechfestLabel } from "@/data/techfest";
import { getTechfestDataWithEvents } from "@/helpers/get-techfest-data-with-events";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "./_components/link";

const EVENT_TYPES = ["pre-events", "post-events", "main-events"];

const Page = async ({
  params: { eventType, techfestVersion },
}: {
  params: { eventType: string; techfestVersion: string };
}) => {
  if (!EVENT_TYPES.includes(eventType)) {
    return <Error404 className="min-h-[85vh]" />;
  }

  const taranga = await getTechfestDataWithEvents(
    techfestVersion as TechfestLabel
  );

  if (!taranga) {
    return <Error404 className="min-h-[85vh]" />;
  }

  const data =
    eventType === "pre-events"
      ? taranga?.preEvents
      : eventType === "main-events"
      ? taranga?.mainEvents
      : taranga?.postEvents;

  return (
    <div className="container my-16 sm:mt-20 xl:mt-24 flex flex-col gap-12 min-h-[80vh] max-w-4xl">
      {!data || data?.length === 0 ? (
        <div className="h-[60vh] text-muted-foreground text-lg text-center flex items-center justify-center">
          No events to show!
        </div>
      ) : (
        <ol className="relative border-s border-muted-foreground">
          {data?.map((e, i) => (
            <li className="mb-10 ms-6" key={i}>
              <div className="flex items-center justify-between gap-6">
                <div>
                  <span className="absolute flex items-center justify-center w-6 h-6 p-1 rounded-full -start-3 bg-muted text-muted-foreground">
                    <Calendar />
                  </span>
                  <h3 className="flex items-center mb-1 text-xl sm:text-3xl md:text-4xl font-semibold text-foreground">
                    {e.event?.title}
                    <Badge className="ms-3 max-sm:hidden" variant={"secondary"}>
                      {eventType.substring(0, eventType.length - 1)}
                    </Badge>
                  </h3>
                  <p className="mb-4 text-base font-normal text-foreground/80">
                    {e.event?.desc}
                  </p>
                </div>
                <Image
                  src={e.event?.image ?? ""}
                  className="object-center object-cover h-28 w-fit rounded-lg max-md:hidden"
                  alt=""
                  height={600}
                  width={600}
                />
              </div>
              <div className="flex items-center gap-3">
                <Link
                  event={e.eventId}
                  eventType={eventType}
                  href={e.href!}
                  techfestVersion={techfestVersion}
                />
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};
export default Page;
