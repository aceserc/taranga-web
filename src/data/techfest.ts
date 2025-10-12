export type Event = {
  eventId: string;
  href?: string;
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

export type CurrentTechfestStatus = "counting" | "started" | "completed";

export const techfestData: TechfestData = {
  "v1.0": {
    path: "/v1.0/",
    startDate: "2025/12/12",
    endDate: "",
    landingPage: {
      desc: "Dive into ACES Techfest v7.0—where ideas spark, skills grow, and the future takes shape. Join the action and redefine innovation!",
      header: "Techfest v7.0: Ignite Your Innovation",
      previewVideo:
        "https://ik.imagekit.io/4mz6ivdcd/Manual%20Uploads/Videos/ACES%20Promotional%20Video%201.mp4?tr=orig",
    },
    preEvents: [
      {
        eventId: "ai-art-competition",
        href: "https://www.facebook.com/share/p/186iP9hQCW/",
      },
      {
        eventId: "learning-challenge",
        href: "https://www.facebook.com/share/p/1CyEhSS9E8/",
      },
      {
        eventId: "brain-storming-quiz",
        href: "https://www.facebook.com/share/p/1HNnWe8URv/",
      },
    ],
    mainEvents: [
      {
        eventId: "hackathon",
        href: "https://www.facebook.com/share/19Wd8emPbY/",
      },
      {
        eventId: "intern-fest",
        href: "https://www.facebook.com/share/p/15deRVAuWK/",
      },
      {
        eventId: "google-maestro",
        href: "https://www.facebook.com/share/1AqhLAEyDJ/",
      },
      {
        eventId: "datathon",
        href: "https://www.facebook.com/share/15ft4PqbeV/",
      },
      {
        eventId: "ar-bug-hunt",
        href: "https://www.facebook.com/share/15fDxeStim/",
      },
      {
        eventId: "capture-the-flag",
        href: "https://www.facebook.com/share/19hCLvGiwX/",
      },
      {
        eventId: "ui-ux-competition",
        href: "https://www.facebook.com/share/1E4Gd9DGWW/",
      },
      {
        eventId: "game-fest",
        href: "https://www.facebook.com/share/p/18umLThpmg/",
      },
    ],
    partners: {
      titleSponsor: {
        logo: "/assets/images/logo/zaaou.png",
        name: "Zaaou",
        href: "https://www.facebook.com/ZaaouNepal/",
        brandColor: "#E36548",
      },
      more: [
        {
          type: "Sponsors",
          partners: [
            {
              name: "CODENT",
              logo: "/assets/images/v7.0-partners/codent.jpg",
            },
            {
              name: "Code For Change",
              logo: "/assets/images/v7.0-partners/cfc.jpg",
            },
            {
              name: "CodeIT",
              logo: "/assets/images/v7.0-partners/code-it.jpg",
            },
            {
              name: "Code Mantra",
              logo: "/assets/images/v7.0-partners/code-mantra.jpg",
            },
            {
              name: "Didital Forensic UK",
              logo: "/assets/images/v7.0-partners/digital-forensic-uk.jpg",
            },
            {
              name: "Diplung Bakery",
              logo: "/assets/images/v7.0-partners/diplung-bakery.jpg",
            },
            {
              name: "Lunar IT Solutions",
              logo: "/assets/images/v7.0-partners/lunar-it-solutions.jpg",
            },
            {
              name: "Siddhartha Bank",
              logo: "/assets/images/v7.0-partners/siddhartha-bank.jpg",
            },
            {
              name: "Thomas",
              logo: "/assets/images/v7.0-partners/thomas.jpg",
            },
          ],
        },
        {
          type: "Media Partners",
          partners: [
            {
              name: "Hamro Patro",
              logo: "/assets/images/v7.0-partners/hamro-patro.jpg",
              href: "https://www.hamropatro.com/",
            },
            {
              name: "Dharan Buzz",
              logo: "/assets/images/v7.0-partners/dharan-buzz.jpg",
            },
          ],
        },
        {
          type: "InternFest Partners",
          partners: [
            {
              name: "Lunar IT Solutions",
              logo: "/assets/images/v7.0-partners/lunar-it-solutions.jpg",
            },
            {
              name: "Bardali Creations",
              logo: "/assets/images/v7.0-partners/bardali-creations.png",
            },
            {
              name: "Youth It",
              logo: "/assets/images/v7.0-partners/youth-it.jpg",
            },
            {
              name: "",
              logo: "/assets/images/v7.0-partners/u1.jpg",
            },
          ],
        },
        {
          type: "Partners",
          partners: [
            {
              name: "Dev's Fish Farmstay",
              logo: "/assets/images/v7.0-partners/devs-fish-farmstay.jpg",
            },
            {
              name: "Digital Pathshala",
              logo: "/assets/images/v7.0-partners/digital-pathshala.jpg",
            },
            {
              name: "Drishya",
              logo: "/assets/images/v7.0-partners/drishya.jpg",
            },
            {
              name: "Friend's Cinemas",
              logo: "/assets/images/v7.0-partners/friends-cinemas.jpg",
            },
            {
              name: "Hi-Link",
              logo: "/assets/images/v7.0-partners/hi-link.jpg",
            },
            {
              name: "Hunger Hunt",
              logo: "/assets/images/v7.0-partners/hunger-hunt.jpg",
            },
            {
              name: "Kailash Cloud",
              logo: "/assets/images/v7.0-partners/kailash-cloud.jpg",
            },
            {
              name: "OOPS",
              logo: "/assets/images/v7.0-partners/oops.jpg",
            },
            {
              name: "Programiz",
              logo: "/assets/images/v7.0-partners/programiz.jpg",
            },
            {
              name: "SIE",
              logo: "/assets/images/v7.0-partners/sie.jpg",
            },
            {
              name: "Smart Cheli",
              logo: "/assets/images/v7.0-partners/smart-cheli.jpg",
            },
            {
              name: "",
              logo: "/assets/images/v7.0-partners/u2.jpg",
            },
            {
              name: "",
              logo: "/assets/images/v7.0-partners/u3.jpg",
            },
            {
              name: "Worldlink",
              logo: "/assets/images/v7.0-partners/world-link.jpg",
            },
          ],
        },
        {
          type: "Community Partners",
          partners: [
            {
              name: "Amidst",
              logo: "/assets/images/v7.0-partners/amidst.jpg",
            },
            {
              name: "BOSC",
              logo: "/assets/images/v7.0-partners/bosc.jpg",
            },
            {
              name: "Club Pokhara",
              logo: "/assets/images/v7.0-partners/club-pokhara.jpg",
            },
            {
              name: "Codasrous",
              logo: "/assets/images/v7.0-partners/codasrous.jpg",
            },
            {
              name: "csit",
              logo: "/assets/images/v7.0-partners/csit.jpg",
            },
            {
              name: "Everyday Karma",
              logo: "/assets/images/v7.0-partners/everyday-karma.jpg",
            },
            {
              name: "innovation-computer-engineering-club",
              logo: "/assets/images/v7.0-partners/innovation-computer-engineering-club.jpg",
            },
            {
              name: "Prime IT Club",
              logo: "/assets/images/v7.0-partners/prime-it-club.jpg",
            },
            {
              name: "union-of-csit-students",
              logo: "/assets/images/v7.0-partners/union-of-csit-students.jpg",
            },
          ],
        },
      ],
    },
  },
};

const currentTechfestLabel: TechfestLabel = "v1.0";
export const currentTechfest: CurrentTechfest = {
  label: currentTechfestLabel,
  ...techfestData[currentTechfestLabel],
};
