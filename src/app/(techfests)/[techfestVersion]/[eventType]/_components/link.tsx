"use client"
import { buttonVariants } from "@/components/ui/button"
import { sendGAEvent } from "@next/third-parties/google"
import { ArrowRightIcon } from "lucide-react"
import L from "next/link"

type Props = {
  event: string
  href: string
  techfestVersion: string
  eventType: string
}

const Link = ({ event, href, eventType, techfestVersion }: Props) => {
  return (
    <L
      onClick={() => {
        sendGAEvent({
          event: "click",
          page_path: `/techfests/${techfestVersion}/${eventType}/${event}`,
        })
      }}
      href={href ?? ""}
      target="_blank"
      className={buttonVariants({
        variant: "secondary",
        size: "sm",
        className: !href && "opacity-60 pointer-events-none"
      })}

    >
      Participate <ArrowRightIcon className="ml-2.5 size-4" />
    </L>
  )
}
export default Link