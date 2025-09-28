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
import { getCurrentTechfestStatus } from "@/helpers/get-current-techfest-status";

const HeroSection = () => {
  const techfestStatus = getCurrentTechfestStatus()
  return (
    <>
      <section
        id="hero-section"
        className="container w-full min-h-[800px] sm:min-h-[90vh] flex items-center justify-center relative">
        <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32 z-10">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="text-sm py-2">
              <span className="mr-2 text-primary">
                <Badge>
                  {currentTechfest.label}
                </Badge>
              </span>
              <span>
                {techfestStatus === "counting" ? "Countdown begins..." : techfestStatus === "started" ? "It's here..." : "It's completed!"}
              </span>
            </Badge>

            <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
              <h1>
                Unleash Innovation at ACES
                <span className="gradient-text">
                  Techfest
                </span>
                {currentTechfest.label}
              </h1>
            </div>

            <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
              Get ready for {currentTechfest.label} - where tech enthusiasts compete, create, and connect in events like Hackathons, UI/UX Showdowns, and more. Experience the future of innovation!
            </p>

            <div className="space-y-4 md:space-x-4">
              {techfestStatus === "counting" && <CountdownTimer targetDate={currentTechfest.startDate} />}
              <Link
                href={currentTechfest.path}
                className={cn(buttonVariants({ variant: "link" }), "w-5/6 md:w-1/4 group/arrow text-muted-foreground")}>
                Explore {currentTechfest.label}
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>

            </div>
          </div>
        </div>
        <ScrollDownButton
          scrollTo="#techfest"
        />
        <Floating3DModels />
      </section>
    </>
  );
};

export default HeroSection;