import { Button } from "../ui/button";
import Image from "next/image";

export default function Projects() {
    return (
      <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-white dark:bg-gray-900 text-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h3 className="text-2xl font-bold tracking-tighter text-black dark:text-white md:text-3xl">Our Projects</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4 lg:gap-6 xl:gap-8 items-start mt-8">
            <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg text-left">
              <Image
                alt="Project image"
                className="[grid-area:stack] object-cover w-full aspect-[1.5/2]"
                height={500}
                src="/project2.png"
                width={300}
              />
              <div className="flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-4 justify-end flex flex-col gap-2">
                <p className="font-semibold text-[14px] tracking-tight">MARJAN PACKAGE 1 – PIB 3</p>
                <small className="text-[12px] leading-none">TECHNICAL BUILDING (NEW BUILD)</small>
              </div>
            </div>
            <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg text-left">
              <Image
                alt="Project image"
                className="[grid-area:stack] object-cover w-full aspect-[1.5/2]"
                height={500}
                src="/project5.png"
                width={300}
              />
              <div className="flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-4 justify-end flex flex-col gap-2">
                <p className="font-semibold text-[14px] tracking-tight">ZULUF GOSP 1</p>
                <small className="text-[12px] leading-none">TECHNICAL BUILDING (NEW BUILD)</small>
              </div>
            </div>
            <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg text-left">
              <Image
                alt="Project image"
                className="[grid-area:stack] object-cover w-full aspect-[1.5/2]"
                height={500}
                src="/project1.png"
                width={300}
              />
              <div className="flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-4 justify-end flex flex-col gap-2">
                <p className="font-semibold text-[14px] tracking-tight">FPSO CYRUS</p>
                <small className="text-[12px] leading-none">PROCESS SKIDS (STRUCTURAL)</small>
              </div>
            </div>
            <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg text-left">
              <Image
                alt="Project image"
                className="[grid-area:stack] object-cover w-full aspect-[1.5/2]"
                height={500}
                src="/project3.png"
                width={300}
              />
              <div className="flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-4 justify-end flex flex-col gap-2">
                <p className="font-semibold text-[14px] tracking-tight">TAKREER OPERATOR SHELTER</p>
                <small className="text-[12px] leading-none">BLAST RESISTANT (MODULAR)</small>
              </div>
            </div>
            <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg text-left">
              <Image
                alt="Project image"
                className="[grid-area:stack] object-cover w-full aspect-[1.5/2]"
                height={500}
                src="/project4.png"
                width={300}
              />
              <div className="flex-1 [grid-area:stack] bg-gradient-to-t from-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-4 justify-end flex flex-col gap-2">
                <p className="font-semibold text-[14px] tracking-tight">JASMINE LQ</p>
                <small className="text-[12px] leading-none">LQ PLATFORM (NEW BUILD)</small>
              </div>
            </div>
          </div>
        </div>
        <Button className="text-sm lg:text-base bg-[#2B2B2B] text-white py-2 rounded mt-8 mb-12">More Work</Button>
        <div className="min-h-[400px] w-full mt-[-13%] hidden md:block" style={{background: 'url(/projects_bg.png)'}}></div>
      </section>
    )
  }
  
  