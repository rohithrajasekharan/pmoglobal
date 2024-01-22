"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Client() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
      <Image
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
        height={400}
        src="/clients_bg.jpeg"
        style={{
          aspectRatio: "1200/400",
          objectFit: "cover",
        }}
        width={1200}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div className="inline-flex items-center justify-center px-3 py-1 text-sm text-black bg-gray-200 border-l-4 border-red-500 mb-12">
          We Work With
        </div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "start",
          }}
          className="w-full max-w-[90%]"
        >
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/3 sm:basis-1/3 md:basis-1/5 lg:basis-1/6">
                <Image
                  alt={`client${index+1}`}
                  className="w-32 h-32"
                  height={260}
                  src={`/client${index+1}.png`}
                  width={260}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
