import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/helpers/cn"
import { ArrowRight } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { Fragment } from "react"


const AboutPage = async () => {
  return (
    <div className="space-y-12 container mx-auto my-20 max-md:mb-32 overflow-visible relative">
      <div className="text-center mb-8 relative z-10">
        <h2 className="text-lg text-muted-foreground/60 text-center mb-2 tracking-wider">
          Where technology meets creativity
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 gradient-text">
          About Techfest
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center text-center gap-4 max-w-3xl m-auto relative z-10">
        <p>
          ACES Techfest is one of the largest and most established technological festivals in Eastern Nepal. The festival draws a substantial number of visitors and participants each year, ensuring extensive media coverage across major online platforms, television channels, and print media, highlighting both the main events and the pre- and post-event activities.
        </p>
        <p>
          The audience for ACES Techfest is diverse and widespread, primarily targeting tech-savvy individuals aged 15-25. Additionally, the festival engages participants from science and technology academia, tech and development-focused companies, national stakeholders in innovation, and curious members of the general public, creating a vibrant and inclusive atmosphere.
        </p>
      </div>
      <div className="flex items-center justify-center flex-col relative z-10">
        <Card>
          <CardContent className="grid grid-cols-[1fr_10px_1fr] sm:flex items-center gap-y-4 gap-x-9 justify-center p-6 text-center">
            {[
              {
                title: "100k+",
                description: "Social Media Reach",
              },
              {
                title: "4k+",
                description: "Participants and Visitors",
              },

            ].map((stats, i) => (
              <Fragment key={i}>
                {i !== 0 && (
                  <Separator
                    orientation="vertical"
                    className="h-14 w-px hidden max-sm:[&:nth-child(2)]:block max-sm:[&:nth-child(7)]:block sm:block"
                  />
                )}
                {i === 2 && (
                  <Separator
                    orientation="horizontal"
                    className="h-px w-full sm:hidden col-span-3"
                  />
                )}
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-xl md:text-2xl xl:text-3xl font-medium">
                    {stats.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {stats.description}
                  </p>
                </div>
              </Fragment>
            ))}
          </CardContent>
        </Card>
        <Link
          href={"https://aceserc.org"}
          className={cn(buttonVariants({ variant: "link" }), "w-5/6 md:w-1/4 group/arrow text-muted-foreground")}>
          Learn about ACES
          <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div >
  )
}
export default AboutPage

export const metadata: Metadata = {
  title: "About",
}