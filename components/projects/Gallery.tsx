"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="w-full bg-zinc-800 p-8">
      <div className="px-3 py-1 text-sm font-medium bg-white bg-opacity-90 border-l-4 border-red-500 mb-2 mx-auto w-fit">
        Projects Gallery
      </div>
      <Carousel
        className="max-w-[1200px] w-[90%] mx-auto"
      >
        <CarouselContent>
        <CarouselItem>
            <div className="flex flex-wrap justify-center">
              <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
                <Image
                  alt="Project image"
                  className="object-cover w-full"
                  height={500}
                  src="/gal1.png"
                  width={300}
                />
              </div>
              <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
                <Image
                  alt="Project image"
                  className="object-cover w-full"
                  height={500}
                  src="/gal2.png"
                  width={300}
                />
              </div>
              <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
                <Image
                  alt="Project image"
                  className="object-cover w-full"
                  height={500}
                  src="/gal3.png"
                  width={300}
                />
              </div>
              <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
                <Image
                  alt="Project image"
                  className="object-cover w-full"
                  height={500}
                  src="/gal4.png"
                  width={300}
                />
              </div>
              <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
                <Image
                  alt="Project image"
                  className="object-cover w-full"
                  height={500}
                  src="/gal5.png"
                  width={300}
                />
              </div>
              <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
                <Image
                  alt="Project image"
                  className="object-cover w-full"
                  height={500}
                  src="/gal6.png"
                  width={300}
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex flex-wrap justify-center">
              <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
                <Image
                  alt="Project image"
                  className="object-cover w-full"
                  height={500}
                  src="/gal1.png"
                  width={300}
                />
              </div>
              <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
                <Image
                  alt="Project image"
                  className="object-cover w-full"
                  height={500}
                  src="/gal2.png"
                  width={300}
                />
              </div>
              <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
                <Image
                  alt="Project image"
                  className="object-cover w-full"
                  height={500}
                  src="/gal3.png"
                  width={300}
                />
              </div>
              <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
                <Image
                  alt="Project image"
                  className="object-cover w-full"
                  height={500}
                  src="/gal4.png"
                  width={300}
                />
              </div>
              <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
                <Image
                  alt="Project image"
                  className="object-cover w-full"
                  height={500}
                  src="/gal5.png"
                  width={300}
                />
              </div>
              <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
                <Image
                  alt="Project image"
                  className="object-cover w-full"
                  height={500}
                  src="/gal6.png"
                  width={300}
                />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
