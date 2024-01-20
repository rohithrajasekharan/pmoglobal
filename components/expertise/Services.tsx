"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function Services() {
  return (
    <Tabs defaultValue="services" className="mt-12">
      <TabsList className="flex flex-wrap rounded-none max-w-fit mx-auto">
        <TabsTrigger
          defaultChecked={true}
          className="data-[state=active]:bg-black data-[state=active]:text-white rounded-none"
          value="services"
        >
          Services
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:bg-black data-[state=active]:text-white rounded-none"
          value="industrialServices"
        >
          Unique industrial Services
        </TabsTrigger>
      </TabsList>
      <TabsContent value="services" className="max-w-[1200px] mx-auto mt-12">
        <div className="flex flex-wrap justify-center">
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
            <div className="w-full h-auto col-span-2">
              <Image src="/services.png" height={300} width={600} alt="" />
            </div>
            <div className="text-white text-left space-y-4 bg-black p-4 min-h-[280px]">
              <h2 className="text-xl">
                Structural Solutions: Building a Solid Foundation
              </h2>
              <h6 className="text-[#D7D7D7] text-sm">
                From towering storage tanks to intricate pressure vessels, our
                structural engineering prowess forms the backbone of numerous
                projects. We specialize in creating robust structures that
                withstand the test of time and environmental challenges.
              </h6>
            </div>
          </div>
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
            <div className="w-full h-auto col-span-2">
              <Image src="/services.png" height={300} width={600} alt="" />
            </div>
            <div className="text-white text-left space-y-4 bg-black p-4 min-h-[280px]">
              <h2 className="text-xl">
                Architectural Ingenuity: Uniting Aesthetics and Functionality
              </h2>
              <h6 className="text-[#D7D7D7] text-sm">
                With an eye for detail and an artistic touch, our architectural
                experts transform spaces into practical works of art. We bring
                together form and function seamlessly to create spaces that
                inspire.
              </h6>
            </div>
          </div>
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
            <div className="w-full h-auto col-span-2">
              <Image src="/services.png" height={300} width={600} alt="" />
            </div>
            <div className="text-white text-left space-y-4 bg-black p-4 min-h-[280px]">
              <h2 className="text-xl">
                Instrumentation Mastery: Precision Meets Reliability
              </h2>
              <h6 className="text-[#D7D7D7] text-sm">
                Instrumentation is the language of control in any modern
                industrial setup. We master this language, ensuring precision,
                safety, and efficient operations across various systems and
                applications.
              </h6>
            </div>
          </div>
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
            <div className="w-full h-auto col-span-2">
              <Image src="/services.png" height={300} width={600} alt="" />
            </div>
            <div className="text-white text-left space-y-4 bg-black p-4 min-h-[280px]">
              <h2 className="text-xl">
                HVAC Excellence: Creating Comfortable Environments
              </h2>
              <h6 className="text-[#D7D7D7] text-sm">
                We understand the significance of a well designed HVAC system.
                Our team excels in crafting energy- efficient,
                climate-controlled environments that prioritize comfort and
                productivity.
              </h6>
            </div>
          </div>
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
            <div className="w-full h-auto col-span-2">
              <Image src="/services.png" height={300} width={600} alt="" />
            </div>
            <div className="text-white text-left space-y-4 bg-black p-4 min-h-[280px]">
              <h2 className="text-xl">
                Electrical Solutions: Powering Your Vision
              </h2>
              <h6 className="text-[#D7D7D7] text-sm">
                Reliable electrical systems are the lifeline of any project. Our
                electrical engineering solutions guarantee a stable and
                efficient power infrastructure, tailored to meet your specific
                requirements.
              </h6>
            </div>
          </div>
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
            <div className="w-full h-auto col-span-2">
              <Image src="/services.png" height={300} width={600} alt="" />
            </div>
            <div className="text-white text-left space-y-4 bg-black p-4 min-h-[280px]">
              <h2 className="text-xl">
                Piping Proficiency: Seamless Flow of Resources
              </h2>
              <h6 className="text-[#D7D7D7] text-sm">
                From freshwater distribution to active fire-fighting systems,
                our expertise in piping solutions ensures the smooth and secure
                flow of essential resources throughout your projects.
              </h6>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent
        value="industrialServices"
        className="max-w-[1200px] mx-auto mt-12"
      >
        <div className="flex flex-wrap justify-center">
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
            <div className="w-full h-auto col-span-2">
              <Image src="/services.png" height={300} width={600} alt="" />
            </div>
            <div className="text-white text-left space-y-4 bg-black p-4 min-h-[220px]">
              <h2 className="text-xl">Vessels</h2>
              <h6 className="text-[#D7D7D7] text-sm">
                From naval and commercial vessels to luxurious yachts and
                offshore support vessels, our engineering expertise ensures
                smooth sailing on any watercraft.
              </h6>
            </div>
          </div>
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
            <div className="w-full h-auto col-span-2">
              <Image src="/services.png" height={300} width={600} alt="" />
            </div>
            <div className="text-white text-left space-y-4 bg-black p-4 min-h-[220px]">
              <h2 className="text-xl">Platforms</h2>
              <h6 className="text-[#D7D7D7] text-sm">
                Whether it is floating or fixed offshore platforms, technical
                buildings, or control rooms, we create stable and secure spaces
                to support your projects.
              </h6>
            </div>
          </div>
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
            <div className="w-full h-auto col-span-2">
              <Image src="/services.png" height={300} width={600} alt="" />
            </div>
            <div className="text-white text-left space-y-4 bg-black p-4 min-h-[220px]">
              <h2 className="text-xl">Wind farms</h2>
              <h6 className="text-[#D7D7D7] text-sm">
                With our experience in HVDC and HVA/C platforms, we play a
                crucial role in advancing the renewable energy sector.
              </h6>
            </div>
          </div>
          <div className="max-w-[280px] mx-4 my-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
            <div className="w-full h-auto col-span-2">
              <Image src="/services.png" height={300} width={600} alt="" />
            </div>
            <div className="text-white text-left space-y-4 bg-black p-4 min-h-[220px]">
              <h2 className="text-xl">Tanks &amp; Plants</h2>
              <h6 className="text-[#D7D7D7] text-sm">
                With our experience in HVDC and HVA/C platforms, we play a
                crucial role in advancing the renewable energy sector.
              </h6>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
