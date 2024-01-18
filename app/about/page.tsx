import Banner from "@/components/about/Banner";
import Certifications from "@/components/about/Certifications";
import Collaborators from "@/components/about/Collaborators";
import FootPrints from "@/components/about/Footprints";
import MissionVision from "@/components/about/MissionVision";
import Team from "@/components/about/Team";
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
      <MissionVision />
      <FootPrints />
      <Team />
      <Certifications />
      <Collaborators />
      <Client />
      <Contact />
    </main>
  );
}
