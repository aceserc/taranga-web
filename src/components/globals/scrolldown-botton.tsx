"use client"
import { ChevronsDownIcon } from "lucide-react"
import { Button } from "../ui/button"
import useIsScrolled from "@/hooks/use-is-scrolled"
import { cn } from "@/helpers/cn"

const ScrollDownButton = ({ scrollTo }: { scrollTo: string }) => {
  const isScrolled = useIsScrolled()
  return (
    <Button
      onClick={() => {
        document.querySelector(scrollTo)?.scrollIntoView({ behavior: "smooth" })
      }}
      variant={"outline"}
      size={"icon"}
      className={cn("h-fit w-fit fixed bottom-5 left-1/2 transform -translate-x-1/2 transition-transform p-2 rounded-full", isScrolled ? "scale-0" : "scale-100")}
    >
      <ChevronsDownIcon className="size-8" />
    </Button>
  )
}
export default ScrollDownButton