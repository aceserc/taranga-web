"use client"

import { sendGAEvent } from "@next/third-parties/google"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

const PageViews = () => {
  const pathname = usePathname()
  useEffect(() => {
    sendGAEvent({
      event: "page_view",
      page_path: pathname,
    })
  }, [pathname])
  return (
    null
  )
}
export default PageViews