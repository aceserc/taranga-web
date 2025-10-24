import React from "react";
import Link from "next/link";
import {
  ChevronRightIcon,
  CircleGaugeIcon,
  MilestoneIcon,
  TargetIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/helpers/cn";
import { Partner } from "@/data/techfest";

type Props = {
  title: string;
  desc: string;
  techfestVersion: string;
  previewVideo: string;
  titleSponsor?: Partner & {
    brandColor?: string;
  };
};

const HeroSection = ({
  techfestVersion,
  desc,
  title,
  previewVideo,
  titleSponsor,
}: Props) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-3 pt-9">
      <div className="relative z-10 lg:col-span-2 max-w-2xl">
        {titleSponsor && (
          <div className="flex gap-2 items-center w-fit ml-2.5 mb-0.5 opacity-60">
            <Link
              href={titleSponsor.href ?? "#"}
              className={cn(
                "text-3xl font-bold underline",
                !titleSponsor.href && "pointer-events-none"
              )}
              target="_blank"
              style={{
                color: titleSponsor.brandColor,
              }}
            >
              {titleSponsor.name}
            </Link>
            <span className="text-muted-foreground mt-2.5">presents</span>
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
          {title}
        </h2>
        <p className="text-muted-foreground/60 mb-2 tracking-wider">{desc}</p>
      </div>
      <div className="flex flex-col gap-4">
        <video
          src={previewVideo}
          className="w-full h-fit rounded-md cursor-pointer"
          autoPlay
          muted
          controls
          loop
        />
      </div>
      <div className="w-full h-fit grid-cols-1 bg-card/50 rounded-md border">
        {[
          {
            label: "Pre Events",
            icon: CircleGaugeIcon,
            desc: "Get ready with a series of exciting pre-events that build the momentum! From workshops to mini-challenges, kickstart your taranga experience here.",
            href: `/${techfestVersion}/pre-events`,
          },
          {
            label: "Main Events",
            icon: TargetIcon,
            desc: "Dive into the main action! Compete, learn, and innovate in our lineup of thrilling competitions and interactive sessions at the heart of ACES Taranga.",
            href: `/${techfestVersion}/main-events`,
          },
          {
            label: "Post Events",
            icon: MilestoneIcon,
            desc: "Celebrate the journey! Join us for wrap-up sessions, award ceremonies, and networking to mark the end of this incredible taranga.",
            href: `/${techfestVersion}/post-events`,
          },
        ].map(({ label, icon: Icon, desc, href }, i) => (
          <Link
            className={cn(
              "w-full flex flex-col cursor-pointer gap-2.5 group relative px-6 py-5 hover:bg-card transition-colors",
              !href && "pointer-events-none"
            )}
            href={href}
            key={i}
          >
            <Separator
              orientation="vertical"
              className="absolute top-1/2 left-0 h-0 transition-all group-hover:h-[50px] bg-primary w-0.5 rounded-md -translate-y-1/2"
            />
            <div className="flex items-center w-full gap-2.5">
              <Icon className="size-5" />
              <span>{label}</span>
              <ChevronRightIcon className="size-5 ml-auto relative group-hover:-right-2 transition-transform" />
            </div>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
