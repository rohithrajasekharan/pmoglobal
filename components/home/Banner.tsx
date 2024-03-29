import { Button } from "@/components/ui/button";
import Navbar from "../Navbar";
import Link from "next/link";

export default function Banner() {
  return (
    <main
      className="w-full h-screen bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url(/home_banner_bg.png)",
      }}
    >
      <div className="h-screen">
        <Navbar selected="home" />
        <div className="flex items-center h-[80vh]">
          <div className="container flex flex-col items-start space-y-4 mx-[2%] sm:mx-[5%] md:mx-[10%] lg:mx-[10%] pb-4">
            <div className="bg-black bg-opacity-50 text-white px-2 py-1 text-sm lg:text-base border-l-4 border-[#DC1E00]
">
              Synergy Through Collaboration
            </div>
            <h1 className="text-5xl lg:text-6xl text-white font-bold">
              We Are PMO Global
            </h1>
            <p className="text-base lg:text-lg text-white max-w-[600px]">
              Transforming visions into accomplishments. Explore our portfolio
              of successful projects and discover how PMO Global can transform
              your ideas into accomplishments.
            </p>
            <Link href="/about">
              <Button className="text-sm lg:text-base bg-[#DC1E00]
 text-white p-6 rounded-none">
                Our Vision
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
