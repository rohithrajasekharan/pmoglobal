"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface IconProps {
  className?: string;
}

export default function Banner() {
  return (
    <main
      className="w-full h-screen bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url(/home_banner_bg.png)",
      }}
    >
      <div className="h-screen">
        <nav className="py-4 flex justify-between items-center bg-black bg-opacity-50 px-[10%]">
          <div className="block sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="top" className="bg-black bg-opacity-50 text-white">
              <SheetHeader>
                <SheetDescription>
                  <ul>
                    <li className="my-8 text-lg text-white">
                      <Link href="#">Home</Link>
                    </li>
                    <li className="my-8 text-lg text-white">
                      <Link href="#">About Us</Link>
                    </li>
                    <li className="my-8 text-lg text-white">
                      <Link href="#">Our Expertise</Link>
                    </li>
                    <li className="my-8 text-lg text-white">
                      <Link href="#">Our Projects</Link>
                    </li>
                    <li className="my-8 text-lg text-white">
                      <Link href="#">Spotlight</Link>
                    </li>
                    <li className="my-8 text-lg text-white">
                      <Link href="#">Careers</Link>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
              <SheetFooter></SheetFooter>
            </SheetContent>
          </Sheet></div>
          <ul className="sm:flex flex-wrap items-center space-x-2 lg:space-x-4 text-white hidden">
            <li>
              <Link className="text-sm lg:text-base" href="#">
                Home
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link className="text-sm lg:text-base" href="#">
                About Us
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link className="text-sm lg:text-base" href="#">
                Our Expertise
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link className="text-sm lg:text-base" href="#">
                Our Projects
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link className="text-sm lg:text-base" href="#">
                Spotlight
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link className="text-sm lg:text-base" href="#">
                Careers
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <Link href="#">
              <LinkedinIcon className="w-5 h-5 text-white" />
            </Link>
            <Button className="text-sm lg:text-base bg-red-600 text-white px-4 py-2 rounded">
              Contact Us
            </Button>
          </div>
        </nav>
        <div className="flex items-center h-[80vh]">
          <div className="container flex flex-col items-start space-y-4 mx-[2%] sm:mx-[5%] md:mx-[10%] lg:mx-[10%] pb-4">
            <div className="bg-black bg-opacity-50 text-white px-2 py-1 text-sm lg:text-base border-l-4 border-red-600">
              Synergy Through Collaboration
            </div>
            <h1 className="text-3xl lg:text-5xl text-white font-bold">
              We are PMO Global
            </h1>
            <p className="text-base lg:text-lg text-white max-w-[800px]">
              Transforming visions into accomplishments. Explore our portfolio
              of successful projects and discover how PMO Global can transform
              your ideas into accomplishments.
            </p>
            <Button className="text-sm lg:text-base bg-red-600 text-white py-2 rounded">
              Our Vision
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

function LinkedinIcon(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.441 0.290833H2.23491C1.34938 0.290833 0.575684 0.927997 0.575684 1.80312V18.0452C0.575684 18.9251 1.34938 19.7092 2.23491 19.7092H18.4362C19.3265 19.7092 19.994 18.9199 19.994 18.0452V1.80312C19.9992 0.927997 19.3265 0.290833 18.441 0.290833ZM6.59494 16.477H3.81309V7.82758H6.59494V16.477ZM5.30024 6.51251H5.2803C4.39 6.51251 3.81352 5.84977 3.81352 5.02016C3.81352 4.17537 4.40518 3.52824 5.31541 3.52824C6.22565 3.52824 6.78262 4.1706 6.80256 5.02016C6.80213 5.84977 6.22565 6.51251 5.30024 6.51251ZM16.7618 16.477H13.98V11.7477C13.98 10.6146 13.5751 9.84051 12.5687 9.84051C11.7998 9.84051 11.3446 10.3606 11.1422 10.8673C11.0664 11.0494 11.046 11.2973 11.046 11.5504V16.477H8.26414V7.82758H11.046V9.03126C11.4508 8.45478 12.0832 7.62517 13.5548 7.62517C15.3809 7.62517 16.7623 8.82884 16.7623 11.4239L16.7618 16.477Z"
        fill="white"
      />
    </svg>
  );
}

function MenuIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="white"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
  );
}
