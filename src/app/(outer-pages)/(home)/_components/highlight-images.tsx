"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HIGHLIGHT_IMAGES } from "@/contents/highlight-images";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, useRef } from "react";
import Image from "next/image";
import { cn } from "@/helpers/cn";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, FullscreenIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const HighlightImages = () => {
  let IMAGES = HIGHLIGHT_IMAGES;
  // if the images are not in multiples of 3, add the first images to the end to make it a multiple of 3
  if (IMAGES.length % 3 !== 0) {
    const diff = 3 - (IMAGES.length % 3);
    IMAGES = [...IMAGES, ...IMAGES.slice(0, diff)];
  }

  // create a images variable that contains the images in groups of 3
  const images = Array.from({ length: IMAGES.length / 3 }).map((_, i) =>
    IMAGES.slice(i * 3, i * 3 + 3)
  );

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  const openDialog = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  const onFullScreen = () => {
    if (!imageRef.current) return;
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
  };

  // Helper to render the image trigger
  const ImageTrigger = ({
    src,
    badge,
    index,
    className,
  }: {
    src: string;
    badge: string;
    index: number;
    className?: string;
  }) => (
    <div
      className={cn(
        "relative w-full h-full cursor-pointer group overflow-hidden rounded-lg",
        className
      )}
      onClick={() => openDialog(index)}
    >
      <Image
        src={src}
        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 bg-muted/50 shadow-inner"
        height={1000}
        width={1000}
        alt=""
        quality={100}
        fetchPriority="low"
      />
      {badge && (
        <Badge className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {badge}
        </Badge>
      )}
    </div>
  );

  return (
    <section id="highlights" className="container py-12 sm:py-24 relative">
      <div className="text-center mb-8">
        <h2 className="text-lg text-muted-foreground/60 text-center mb-2 tracking-wider">
          A journey through time.
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 gradient-text">
          Highlights from Previous Fests
        </h2>
      </div>
      <Carousel>
        <CarouselContent>
          {images.map((group, groupIndex) => {
            // Calculate actual indices for the images in this group
            const baseIndex = groupIndex * 3;

            if (groupIndex % 2 === 0) {
              return (
                <CarouselItem
                  key={groupIndex}
                  className="basis-8/12 md:basis-5/12 my-auto"
                >
                  <div className="grid grid-cols-2 grid-rows-5 gap-4 max-h-[65vh]">
                    <div className="row-span-2">
                      <ImageTrigger
                        src={group[0].src}
                        badge={group[0].from}
                        index={baseIndex}
                      />
                    </div>
                    <div className="row-span-2">
                      <ImageTrigger
                        src={group[1].src}
                        badge={group[0].from}
                        index={baseIndex + 1}
                      />
                    </div>
                    <div className="col-span-2 row-span-3 row-start-3">
                      <ImageTrigger
                        src={group[2].src}
                        badge={group[0].from}
                        index={baseIndex + 2}
                      />
                    </div>
                  </div>
                </CarouselItem>
              );
            }
            return (
              <CarouselItem
                key={groupIndex}
                className="basis-8/12 md:basis-5/12 my-auto"
              >
                <div className="grid grid-cols-2 grid-rows-5 gap-4 max-h-[65vh]">
                  <div className="row-span-2 col-start-1 row-start-4">
                    <ImageTrigger
                      src={group[0].src}
                      badge={group[0].from}
                      index={baseIndex}
                    />
                  </div>
                  <div className="row-span-2 col-start-2 row-start-4">
                    <ImageTrigger
                      src={group[1].src}
                      badge={group[0].from}
                      index={baseIndex + 1}
                    />
                  </div>
                  <div className="col-span-2 row-span-3 col-start-1 row-start-1">
                    <ImageTrigger
                      src={group[2].src}
                      badge={group[0].from}
                      index={baseIndex + 2}
                    />
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="flex items-center justify-end gap-4 mt-12">
          <CarouselPrevious className="static" />
          <CarouselNext className="static" />
        </div>
      </Carousel>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="p-0 border-none max-w-[90vw] sm:max-w-[80vw] max-h-[90vh] sm:max-h-[80vh] overflow-hidden flex items-center justify-center bg-transparent shadow-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <Button
              variant="secondary"
              size="icon"
              className="absolute border border-primary left-2 z-50 text-white hover:bg-black/20 rounded-full h-12 w-12"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                ref={imageRef}
                src={IMAGES[currentIndex].src}
                className="max-w-full max-h-[85vh] object-contain object-center rounded-lg"
                height={1000}
                width={1000}
                quality={100}
                alt=""
                fetchPriority="high"
              />
              <FullscreenIcon
                onClick={onFullScreen}
                role="button"
                className="size-5 absolute bottom-3 right-3 text-white opacity-70 hover:opacity-100 transition-opacity drop-shadow-md"
              />
              {IMAGES[currentIndex].from && (
                <Badge className="absolute top-3 left-3 z-10">
                  {IMAGES[currentIndex].from}
                </Badge>
              )}
            </div>

            <Button
              variant="secondary"
              size="icon"
              className="absolute right-2 z-50 text-white hover:bg-black/20 rounded-full h-12 w-12 border border-primary"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
export { HighlightImages };
