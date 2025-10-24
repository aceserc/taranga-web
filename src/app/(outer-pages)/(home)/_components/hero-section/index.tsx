"use client";
import { CountdownTimer } from "@/components/globals/countdown-timer";
import ScrollDownButton from "@/components/globals/scrolldown-botton";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Floating3DModels from "./floating-3d-models";
import { currentTechfest } from "@/data/techfest";
import Link from "next/link";
import { cn } from "@/helpers/cn";

const HeroSection = () => {
  const techfestStatus: "upcoming" | "counting" | "started" | "completed" =
    "upcoming";

  const techfestStatusText = {
    upcoming: "It's coming up!",
    counting: "Countdown begins...",
    started: "It's here...",
    completed: "It's completed!",
  } as Record<typeof techfestStatus, string>;

  return (
    <>
      <section
        id="hero-section"
        className="container w-full min-h-[800px] sm:min-h-[90vh] flex items-center justify-center relative"
      >
        <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32 z-10">
          <div className="text-center space-y-8">
            {/* <Badge variant="outline" className="text-sm py-2"> */}
            {/* <span className="mr-2 text-primary">
                <Badge>{currentTechfest.label}</Badge>
              </span> */}
            <Badge>{techfestStatusText[techfestStatus]}</Badge>
            {/* </Badge> */}

            <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
              <h1>
                <span className="gradient-text">Taranga</span>, The Wave of
                Technology
              </h1>
            </div>

            <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
              A joint tech fest by EXCESS xTech and ACES TechFest, bringing
              together brilliant minds of IOE Purwanchal Campus. Experience the
              thrill of hackathons, robotics challenges, debugging, and hardware
              design — where innovation meets competition.
            </p>

            <div className="space-y-4 md:space-x-4">
              {(techfestStatus === "upcoming" ||
                techfestStatus === "counting") && (
                <CountdownTimer targetDate={currentTechfest.startDate} />
              )}
              <Link
                href={currentTechfest.path}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "w-5/6 md:w-1/4 group/arrow text-muted-foreground"
                )}
              >
                Explore Taranga&apos;s Events
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        <ScrollDownButton scrollTo="#taranga" />
        <Floating3DModels />
      </section>
    </>
  );
};

export { HeroSection };
