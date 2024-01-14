import Banner from "@/components/about/Banner";
import MissionVision from "@/components/about/MissionVision";
import What from "@/components/about/What";
import Who from "@/components/about/Who";
import Client from "@/components/home/Client";
import Contact from "@/components/home/Contact";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <Who />
      <What />
      <MissionVision/>
      <Client />
      <Contact />
    </main>
  );
}
