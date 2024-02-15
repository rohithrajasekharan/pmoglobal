"use client";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Gallery() {

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
 
  useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="w-full bg-zinc-800 p-8">
      <div className="px-3 py-1 text-sm font-medium bg-white bg-opacity-90 border-l-4 border-[#DC1E00] mb-2 mx-auto w-fit">
        Projects Gallery
      </div>
      <Carousel
        setApi={setApi}
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
      <div className="flex mt-10">
        {Array.from(Array(count).keys()).map((i) => (
          <Button
            key={i}
            className={` rounded-full p-1.5 h-1 mx-1 ${
              i === current - 1
                  ? "bg-red-500 hover:bg-[#525252]"
                : "bg-[#525252]"
            }`}
            onClick={() => api?.scrollTo(i)}
          />
        ))}
        </div>
    </div>
  );
}
