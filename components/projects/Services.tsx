"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function Services() {
  return (
    <Tabs defaultValue="ongoing" className="py-12">
      <TabsList className="flex flex-wrap rounded-none max-w-fit mx-auto">
        <TabsTrigger
          defaultChecked={true}
          className="data-[state=active]:bg-black data-[state=active]:text-white rounded-none"
          value="ongoing"
        >
          Ongoing
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:bg-black data-[state=active]:text-white rounded-none"
          value="executed"
        >
          Executed
        </TabsTrigger>
      </TabsList>
      <TabsContent value="ongoing" className="max-w-[1200px] mx-auto mt-12">
        <div className="flex flex-wrap justify-center">
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg text-left">
              <img
                alt="Project image"
                className="[grid-area:stack] object-cover w-full aspect-[1.5/2]"
                height={500}
                src="/ongoing1.png"
                width={300}
              />
              <div className="flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-4 justify-end flex flex-col gap-2">
                <p className="font-semibold text-[14px] tracking-tight">NFPS P2</p>
                <small className="text-[12px] leading-none">TECHNICAL BUILDING (NEW BUILD)</small>
              </div>
            </div>
          </div>
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg text-left">
              <img
                alt="Project image"
                className="[grid-area:stack] object-cover w-full aspect-[1.5/2]"
                height={500}
                src="/ongoing2.png"
                width={300}
              />
              <div className="flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-4 justify-end flex flex-col gap-2">
                <p className="font-semibold text-[14px] tracking-tight">NFPS P2</p>
                <small className="text-[12px] leading-none">TECHNICAL BUILDING (NEW BUILD)</small>
              </div>
            </div>
          </div>
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg text-left">
              <img
                alt="Project image"
                className="[grid-area:stack] object-cover w-full aspect-[1.5/2]"
                height={500}
                src="/ongoing3.png"
                width={300}
              />
              <div className="flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-4 justify-end flex flex-col gap-2">
                <p className="font-semibold text-[14px] tracking-tight">NFPS P2</p>
                <small className="text-[12px] leading-none">PROCESS SKIDS (STRUCTURAL)</small>
              </div>
            </div>
          </div>
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg text-left">
              <img
                alt="Project image"
                className="[grid-area:stack] object-cover w-full aspect-[1.5/2]"
                height={500}
                src="/ongoing4.png"
                width={300}
              />
              <div className="flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-4 justify-end flex flex-col gap-2">
                <p className="font-semibold text-[14px] tracking-tight">NFPS P2</p>
                <small className="text-[12px] leading-none">LQ PLATFORM (NEW BUILD)</small>
              </div>
            </div>
          </div>
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg text-left">
              <img
                alt="Project image"
                className="[grid-area:stack] object-cover w-full aspect-[1.5/2]"
                height={500}
                src="/ongoing5.png"
                width={300}
              />
              <div className="flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-4 justify-end flex flex-col gap-2">
                <p className="font-semibold text-[14px] tracking-tight">Rig Gerd 2</p>
                <small className="text-[12px] leading-none">BLAST RESISTANT (MODULAR)</small>
              </div>
            </div>
          </div>
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg text-left">
              <img
                alt="Project image"
                className="[grid-area:stack] object-cover w-full aspect-[1.5/2]"
                height={500}
                src="/ongoing6.png"
                width={300}
              />
              <div className="flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-4 justify-end flex flex-col gap-2">
                <p className="font-semibold text-[14px] tracking-tight">Dibi LQ</p>
                <small className="text-[12px] leading-none">TECHNICAL BUILDING (NEW BUILD)</small>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="executed" className="max-w-[1200px] mx-auto mt-12">
        <div className="flex flex-wrap justify-center">
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg text-left">
              <img
                alt="Project image"
                className="[grid-area:stack] object-cover w-full aspect-[1.5/2]"
                height={500}
                src="/ongoing1.png"
                width={300}
              />
              <div className="flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-4 justify-end flex flex-col gap-2">
                <p className="font-semibold text-[14px] tracking-tight">NFPS P2</p>
                <small className="text-[12px] leading-none">TECHNICAL BUILDING (NEW BUILD)</small>
              </div>
            </div>
          </div>
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg text-left">
              <img
                alt="Project image"
                className="[grid-area:stack] object-cover w-full aspect-[1.5/2]"
                height={500}
                src="/ongoing2.png"
                width={300}
              />
              <div className="flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-4 justify-end flex flex-col gap-2">
                <p className="font-semibold text-[14px] tracking-tight">NFPS P2</p>
                <small className="text-[12px] leading-none">TECHNICAL BUILDING (NEW BUILD)</small>
              </div>
            </div>
          </div>
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg text-left">
              <img
                alt="Project image"
                className="[grid-area:stack] object-cover w-full aspect-[1.5/2]"
                height={500}
                src="/ongoing3.png"
                width={300}
              />
              <div className="flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-4 justify-end flex flex-col gap-2">
                <p className="font-semibold text-[14px] tracking-tight">NFPS P2</p>
                <small className="text-[12px] leading-none">TECHNICAL BUILDING (NEW BUILD)</small>
              </div>
            </div>
          </div>
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg text-left">
              <img
                alt="Project image"
                className="[grid-area:stack] object-cover w-full aspect-[1.5/2]"
                height={500}
                src="/ongoing4.png"
                width={300}
              />
              <div className="flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-4 justify-end flex flex-col gap-2">
                <p className="font-semibold text-[14px] tracking-tight">NFPS P2</p>
                <small className="text-[12px] leading-none">TECHNICAL BUILDING (NEW BUILD)</small>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
