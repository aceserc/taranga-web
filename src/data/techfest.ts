import { EventData } from "@/helpers/get-all-events";

export type Event = {
  eventId: string;
  event?: EventData;
  href?: string;
  date?: string;
  by?: "ACES" | "EXCESS";
};

export type Partner = {
  name: string;
  logo: string;
  href?: string;
};

export type Events = Array<Event>;

export type TechfestLabel = `v${number}.0`;
export type TechfestValue = {
  path: string;
  startDate: string; //ad
  endDate: string; //ad
  landingPage: {
    header: string;
    desc: string;
    previewVideo: string;
  };
  preEvents?: Events;
  postEvents?: Events;
  mainEvents?: Events;
  partners?: {
    titleSponsor?: Partner & {
      brandColor?: string;
    };
    more?: Array<{
      type: string;
      partners: Array<Partner>;
    }>;
  };
};
export type TechfestData = Record<TechfestLabel, TechfestValue>;

export type CurrentTechfest = TechfestValue & {
  label: TechfestLabel;
};

export const techfestData: TechfestData = {
  "v1.0": {
    path: "/v1.0/",
    startDate: "2026/1/10",
    endDate: "",
    landingPage: {
      desc: "Dive into ACESxEXCESS Taranga—where ideas spark, skills grow, and the future takes shape. Join the action and redefine innovation!",
      header: "Taranga: Ignite Your Innovation",
      previewVideo:
        "https://ik.imagekit.io/smo1bg7nr/Taranga%20Intro%20Video.mp4",
    },
    preEvents: [
      {
        eventId: "microcontroller-training",
        by: "EXCESS",
        date: "Mangsir 28 to Poush 5",
      },
      {
        eventId: "learning-challenge",
        by: "ACES",
        date: "Poush 7 onwards",
      },
      {
        eventId: "brain-storming-quiz",
        by: "ACES",
        date: "Poush 14 to Poush 21",
      },
      {
        eventId: "iot-raspberry-pi-training",
        by: "EXCESS",
        date: "Poush 8 to Poush 15",
      },
      { eventId: "tech-talks", by: "EXCESS", date: "Poush 15 Onwards" },
      { eventId: "matlab-simulink-training", by: "EXCESS", date: "Poush 16" },
      {
        eventId: "research-workshop-continuation",
        by: "EXCESS",
        date: "Poush 18",
      },
      { eventId: "hack-a-meme", by: "EXCESS", date: "Poush 20 Onwards" },
      { eventId: "nepal-telecom-workshop", by: "EXCESS", date: "Poush 20" },
      {
        eventId: "e-sports-tournament",
        by: "EXCESS",
        date: "Poush 21 to Poush 23",
      },
      {
        eventId: "datathon",
        by: "ACES",
        date: "Poush 23 to Poush 24",
      },
      { eventId: "soldering-competition", by: "EXCESS", date: "Poush 24" },
      {
        eventId: "capture-the-flag",
        by: "ACES",
      },
    ],
    mainEvents: [
      {
		eventId: "software-hackathon",
		by: "ACES",
		date: "Poush 25 to Poush 27",
	  },
      {
        eventId: "hardware-hackathon",
        by: "EXCESS",
        date: "Poush 26 to Poush 28",
      },
      {
        eventId: "google-maestro",
        by: "ACES",
        date: "Poush 27",
      },
      {
        eventId: "intern-fest",
        by: "ACES",
        date: "Poush 27, 28",
      },
      {
        eventId: "ar-bug-hunt",
        by: "ACES",
      },
    ],
    partners: {
      // titleSponsor: {
      //   logo: "/assets/images/logo/zaaou.png",
      //   name: "Zaaou",
      //   href: "https://www.facebook.com/ZaaouNepal/",
      //   brandColor: "#E36548",
      // },
      more: [],
    },
  },
};

const currentTechfestLabel: TechfestLabel = "v1.0";
export const currentTechfest: CurrentTechfest = {
  label: currentTechfestLabel,
  ...techfestData[currentTechfestLabel],
};
