"use client"
import { cn } from "@/helpers/cn"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FullscreenIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"

type Props = {
  src: string;
  className?: string;
  height?: number;
  width?: number;
}
const ImageDialog = ({ src, className, height = 1000, width = 1000 }: Props) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const onFullScreen = () => {
    if (!imageRef.current) return
    if (imageRef.current.requestFullscreen) {
      imageRef.current.requestFullscreen();
      //@ts-expect-error: ts error
    } else if (imageRef.current.webkitRequestFullscreen) {
      //@ts-expect-error: ts error

      imageRef.current.webkitRequestFullscreen(); // For Safari
      //@ts-expect-error: ts error
    } else if (imageRef.current.msRequestFullscreen) {
      //@ts-expect-error: ts error
      imageRef.current.msRequestFullscreen(); // For IE11
    }
  }

  const handleFullscreenChange = () => {
    setIsFullscreen(document.fullscreenElement === imageRef.current);
  };

  // Attach and clean up event listener for fullscreen changes
  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);



  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={src}
          className={cn("w-full h-full object-cover object-center rounded-lg cursor-pointer bg-muted/50 shadow-inner", className)}
          height={height}
          width={width}
          alt=""
          quality={100}
          fetchPriority="low"
        />
      </DialogTrigger>
      <DialogContent className="p-0 border-none">
        <Image
          ref={imageRef}
          src={src}
          className={cn("w-full h-full object-center rounded-lg", isFullscreen ? "object-contain" : "object-cover", className)}
          height={height}
          width={width}
          quality={100}
          alt=""
          fetchPriority="low"
        />
        <FullscreenIcon
          onClick={onFullScreen}
          role="button" className="size-5 absolute bottom-3 right-3 opacity-70 hover:opacity-100 transition-opacity" />
      </DialogContent>
    </Dialog>


  )
}
export default ImageDialog