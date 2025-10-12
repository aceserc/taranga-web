import { getAllEvents } from "@/helpers/get-all-events";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/helpers/cn";
import { Metadata } from "next";

const EventsPage = async () => {
  const events = await getAllEvents();
  return (
    <div className="space-y-12 container mx-auto my-16 h-full w-full min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-lg text-muted-foreground/60 text-center mb-2 tracking-wider">
          Get involved!
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 gradient-text">
          Techfest Event Catalog
        </h2>
      </div>
      {events?.length === 0 ? (
        <p>No events found</p>
      ) : (
        <>
          {events.map((event, i) => (
            <Card
              className="p-6 grid grid-cols-1 lg:grid-cols-7 bg-card/30 gap-9"
              key={i}
            >
              <div
                className={cn(
                  "space-y-4 lg:col-span-4",
                  i % 2 == 0 ? "lg:order-1" : "lg:order-2"
                )}
              >
                <h2
                  className={
                    "text-2xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight"
                  }
                >
                  {i + 1}. {event.title}
                </h2>

                {event.category && event.category.length !== 0 && (
                  <div className="flex flex-wrap gap-2">
                    <Badge className=" text-xs lg:text-sm font-normal">
                      {event.by}
                    </Badge>
                    {event.category?.map((category, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className=" text-xs lg:text-sm font-normal"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                )}
                <div>{event.content}</div>
              </div>
              <Image
                src={event.image}
                alt={event.title}
                width={800}
                height={800}
                className={cn(
                  "w-full h-full object-cover object-center lg:col-span-3 rounded-lg",
                  i % 2 == 0 ? "order-2" : "order-1"
                )}
                quality={100}
              />
            </Card>
          ))}
          <div className="text-center text-sm text-muted-foreground">
            Techfest isn&apos;t just about tech events—it&apos;s a celebration
            of creativity and innovation in every form! Join us for an
            unforgettable experience!
          </div>
        </>
      )}
    </div>
  );
};
export default EventsPage;

export const metadata: Metadata = {
  title: "Events",
};
