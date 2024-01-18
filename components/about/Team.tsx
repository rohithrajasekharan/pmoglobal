"use client";
import Link from "next/link";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";

interface IconProps {
  className?: string;
}

export default function Team() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F4F4F4] text-center">
      <div className="inline-block bg-gray-200 border-l-4 border-red-500 px-3 py-2 text-sm font-medium mb-10">
        Our Team
      </div>
      <div className="container px-4 md:px-6">
        <h2 className=" font-bold tracking-tighter text-center text-3xl">
          Meet Expert Team
        </h2>
        <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-4 items-center justify-items-center">
          <div className="relative max-w-[80%]">
            <img
              alt="Team member"
              className="w-full h-auto aspect-[1/1] overflow-hidden object-cover object-center"
              height="300"
              src="/emp1.png"
              width="300"
            />
            <div className="bottom-0 left-0 w-full bg-black bg-opacity-75 flex items-center justify-between px-4 py-2 text-left h-28">
              <div>
                <h3 className="text-white font-bold">John Thomas</h3>
                <p className="text-gray-300 text-sm">CEO</p>
              </div>
              <div className="flex self-end">
                <Link href="/">
                  <LinkedinIcon className="h-15 w-15 text-white absolute bottom-[75px] right-[-6px]" />
                </Link>
                <Dialog>
                  <DialogTrigger asChild>
                    <ArrowRightIcon className="h-15 w-15 text-white ml-4 rounded-full bg-white bg-opacity-25 cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent className="bg-black text-white sm:flex sm:max-w-[625px] border-none justify-items-center">
                    <div className="sm:w-1/3">
                      <img
                        alt="Person's name"
                        className="w-auto h-auto max-h-[350px] self-center"
                        height="200"
                        src="/emp1.png"
                        width="200"
                      />
                    </div>
                    <div className="sm:w-2/3 p-4 space-y-4">
                      <DialogHeader>
                        <DialogTitle>John Thomas</DialogTitle>
                        <DialogDescription>CEO</DialogDescription>
                      </DialogHeader>
                      <hr className="border-white" />
                      <p className="text-sm">
                        With over 25 years of expertise in the Oil & Gas
                        construction industry, John specializes in formulating
                        effective business strategies and guiding teams to
                        deliver top-tier products within set timelines and
                        budgets His proficiency extends to overseeing
                        operations, ensuring legal compliance, and fostering
                        strong partnerships across offshore renewables, oil/gas,
                        and marine sectors. His specialized knowledge spans
                        OHVS, HVDC/HVAC platforms, modular buildings, Rigs,
                        FPSOs, MPVs, Barges, ships, and Liftboats.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          <div className="relative max-w-[80%]">
            <img
              alt="Team member"
              className="w-full h-auto aspect-[1/1] overflow-hidden object-cover object-center"
              height="300"
              src="/emp2.png"
              width="300"
            />
            <div className="bottom-0 left-0 w-full bg-black bg-opacity-75 flex items-center justify-between px-4 py-2 text-left h-28">
              <div>
                <h3 className="text-white font-bold">Mohammed Rajiv</h3>
                <p className="text-gray-300 text-sm">Operations Director</p>
              </div>
              <div className="flex self-end">
                <Link href="/">
                  <LinkedinIcon className="h-15 w-15 text-white absolute bottom-[75px] right-[-6px]" />
                </Link>
                <Dialog>
                  <DialogTrigger asChild>
                    <ArrowRightIcon className="h-15 w-15 text-white ml-4 rounded-full bg-white bg-opacity-25 cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent className="bg-black text-white sm:flex sm:max-w-[625px] border-none justify-items-center">
                    <div className="sm:w-1/3">
                      <img
                        alt="Person's name"
                        className="w-auto h-auto max-h-[350px] self-center"
                        height="200"
                        src="/emp2.png"
                        width="200"
                      />
                    </div>
                    <div className="sm:w-2/3 p-4 space-y-4">
                      <DialogHeader>
                        <DialogTitle>Mohammed Rajiv</DialogTitle>
                        <DialogDescription>Operations Director</DialogDescription>
                      </DialogHeader>
                      <hr className="border-white" />
                      <p className="text-sm">
                        With over 35 years of extensive experience in Project
                        Management of EPC Projects in offshore, onshore, oil &
                        gas, and marine sectors, Rajiv serves as the Operations
                        Director at PMO Global. His expertise encompasses
                        planning and coordinating operations, managing projects
                        and procurement processes, overseeing customer support,
                        and maintaining robust relationships with both vendors
                        and clients.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          <div className="relative max-w-[80%]">
            <img
              alt="Team member"
              className="w-full h-auto aspect-[1/1] overflow-hidden object-cover object-center"
              height="300"
              src="/emp3.png"
              width="300"
            />
            <div className="bottom-0 left-0 w-full bg-black bg-opacity-75 flex items-center justify-between px-4 py-2 text-left h-28">
              <div>
                <h3 className="text-white font-bold">Jassim</h3>
                <p className="text-gray-300 text-sm">Commercial Director</p>
              </div>
              <div className="flex self-end">
                <Link href="/">
                  <LinkedinIcon className="h-15 w-15 text-white absolute bottom-[75px] right-[-6px]" />
                </Link>
                <Dialog>
                  <DialogTrigger asChild>
                    <ArrowRightIcon className="h-15 w-15 text-white ml-4 rounded-full bg-white bg-opacity-25 cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent className="bg-black text-white sm:flex sm:max-w-[625px] border-none justify-items-center">
                    <div className="sm:w-1/3">
                      <img
                        alt="Person's name"
                        className="w-auto h-auto max-h-[350px] self-center"
                        height="200"
                        src="/emp3.png"
                        width="200"
                      />
                    </div>
                    <div className="sm:w-2/3 p-4 space-y-4">
                      <DialogHeader>
                        <DialogTitle>Jassim</DialogTitle>
                        <DialogDescription>Commercial Director</DialogDescription>
                      </DialogHeader>
                      <hr className="border-white" />
                      <p className="text-sm">
                        A results-driven professional with a wealth of
                        experience in the marine, oil & gas, offshore, and
                        onshore projects. With a keen understanding of business
                        dynamics, he takes complete ownership of Commercial, Bid
                        and Estimation, Sales, and Marketing processes. Mohamed
                        excels in leadership, efficiently managing teams and
                        overseeing all techno-commercial activities from
                        pre-contracts to post-award phases. His expertise spans
                        cost management, proposals, estimation, and business
                        development across a diverse portfolio, including
                        Windfarm HVDC platforms, Offshore substation platforms,
                        Liftboats, Jack Up Vessels, and various other projects.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          <div className="relative max-w-[80%]">
            <img
              alt="Team member"
              className="w-full h-auto aspect-[1/1] overflow-hidden object-cover object-center"
              height="300"
              src="/emp4.png"
              width="300"
            />
            <div className="bottom-0 left-0 w-full bg-black bg-opacity-75 flex items-center justify-between px-4 py-2 text-left h-28">
              <div>
                <h3 className="text-white font-bold">Anwar</h3>
                <p className="text-gray-300 text-sm">Strategy & Control Director</p>
              </div>
              <div className="flex self-end">
                <Link href="/">
                  <LinkedinIcon className="h-15 w-15 text-white absolute bottom-[75px] right-[-6px]" />
                </Link>
                <Dialog>
                  <DialogTrigger asChild>
                    <ArrowRightIcon className="h-15 w-15 text-white ml-4 rounded-full bg-white bg-opacity-25 cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent className="bg-black text-white sm:flex sm:max-w-[625px] border-none justify-items-center">
                    <div className="sm:w-1/3">
                      <img
                        alt="Person's name"
                        className="w-auto h-auto max-h-[350px] self-center"
                        height="200"
                        src="/emp4.png"
                        width="200"
                      />
                    </div>
                    <div className="sm:w-2/3 p-4 space-y-4">
                      <DialogHeader>
                        <DialogTitle>Anwar</DialogTitle>
                        <DialogDescription>Strategy & Control Director</DialogDescription>
                      </DialogHeader>
                      <hr className="border-white" />
                      <p className="text-sm">
                        Anwar Sadath Ibrahim is a seasoned Project Management &
                        Control professional with over 18 years of invaluable
                        experience in the energy sector. His expertise lies in
                        effectively managing Scope, Schedule, and Cost. He is
                        recognized for his dynamic leadership style,
                        team-spirited approach, and a performance-driven
                        mindset. His exceptional blend of tactical and
                        managerial abilities has consistently contributed to
                        successful project outcomes.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon(props: IconProps) {
  return (
    <svg
      {...props}
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="21.7676" cy="21.7676" r="21.7676" fill="#ECECEC" />
      <path
        d="M16 21H28"
        stroke="#2B2B2B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23 16L28 21L23 26"
        stroke="#2B2B2B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function LinkedinIcon(props: IconProps) {
  return (
    <svg
      {...props}
      width="56"
      height="63"
      viewBox="0 0 56 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="61.6392"
        height="55.8721"
        transform="translate(0.12793 62.1104) rotate(-90)"
        fill="#F4F4F4"
      />
      <path
        d="M37.1994 20.5432L19.0474 20.5432C18.0556 20.5432 17.189 21.2569 17.189 22.2371L17.189 40.4293C17.189 41.4149 18.0556 42.2931 19.0474 42.2931L37.194 42.2931C38.1912 42.2931 38.9389 41.4091 38.9389 40.4293L38.9389 22.2371C38.9447 21.2569 38.1912 20.5432 37.1994 20.5432ZM23.931 38.6728L20.8151 38.6728L20.8151 28.9849L23.931 28.9849L23.931 38.6728ZM22.4808 27.5119H22.4585C21.4613 27.5119 20.8156 26.7696 20.8156 25.8404C20.8156 24.8942 21.4783 24.1693 22.4978 24.1693C23.5173 24.1693 24.1412 24.8888 24.1635 25.8404C24.163 26.7696 23.5173 27.5119 22.4808 27.5119ZM35.3186 38.6728L32.2027 38.6728L32.2027 33.3757C32.2027 32.1066 31.7493 31.2395 30.622 31.2395C29.7607 31.2395 29.2509 31.8221 29.0242 32.3896C28.9393 32.5935 28.9164 32.8712 28.9164 33.1548L28.9164 38.6728H25.8006L25.8006 28.9849L28.9164 28.9849L28.9164 30.3331C29.3699 29.6874 30.0782 28.7582 31.7265 28.7582C33.7718 28.7582 35.3191 30.1064 35.3191 33.013L35.3186 38.6728Z"
        fill="#2B2B2B"
      />
    </svg>
  );
}
