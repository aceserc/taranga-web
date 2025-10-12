import ImageDialog from "@/components/globals/image-dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HIGHLIGHT_IMAGES } from "@/contents/highlight-images";

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

  return (
    <section id="highlights" className="container py-24 sm:py-32 relative">
      <div className="text-center mb-8">
        <h2 className="text-lg text-muted-foreground/60 text-center mb-2 tracking-wider">
          A journey through time.
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 gradient-text">
          Highlights from Previous Techfests
        </h2>
      </div>
      <Carousel>
        <CarouselContent>
          {images.map((group, i) => {
            if (i % 2 === 0) {
              return (
                <CarouselItem key={i} className="basis-8/12 md:basis-5/12">
                  <div className="grid grid-cols-2 grid-rows-5 gap-4 max-h-[65vh]">
                    <div className="row-span-2">
                      <ImageDialog src={group[0].src} badge={group[0].from} />
                    </div>
                    <div className="row-span-2">
                      <ImageDialog src={group[1].src} badge={group[0].from} />
                    </div>
                    <div className="col-span-2 row-span-3 row-start-3">
                      <ImageDialog src={group[2].src} badge={group[0].from} />
                    </div>
                  </div>
                </CarouselItem>
              );
            }
            return (
              <CarouselItem key={i} className="basis-8/12 md:basis-5/12">
                <div className="grid grid-cols-2 grid-rows-5 gap-4 max-h-[65vh]">
                  <div className="row-span-2 col-start-1 row-start-4">
                    <ImageDialog src={group[0].src} badge={group[0].from} />
                  </div>
                  <div className="row-span-2 col-start-2 row-start-4">
                    <ImageDialog src={group[1].src} badge={group[0].from} />
                  </div>
                  <div className="col-span-2 row-span-3 col-start-1 row-start-1">
                    <ImageDialog src={group[2].src} badge={group[0].from} />
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
    </section>
  );
};
export { HighlightImages };
