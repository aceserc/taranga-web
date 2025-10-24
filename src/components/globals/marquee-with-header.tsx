import { Partner } from "@/data/techfest";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

type Props = {
  data: Partner[];
  id?: string;
  title: string;
};

const MarqueeWithHeader = async ({ data, title, id }: Props) => {
  if (!data || data.length === 0) {
    return null;
  }
  return (
    <section
      id={id}
      className="flex flex-col gap-4 items-center justify-center container mx-auto min-h-16"
    >
      <h2 className="text-lg text-muted-foreground/60 text-center mb-2 tracking-wider">
        {title}
      </h2>
      <div>
        <Marquee
          autoFill={true}
          pauseOnHover={true}
          className="flex items-center justify-center max-w-[90vw] mx-auto"
        >
          {data.map((sponsor, i) => (
            <Link
              href={sponsor.href ?? "#"}
              key={i}
              target="_blank"
              className={!sponsor.href ? "pointer-events-none" : ""}
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                title={sponsor.name}
                className="mr-9 md:mr-10 object-contain object-center h-10 md:h-11 rounded-md bg-muted/40 py-1.5 px-2.5 w-fit bg-blend-lighten"
                fetchPriority="low"
                loading="lazy"
                height={600}
                width={600}
                quality={100}
              />
            </Link>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default MarqueeWithHeader;
