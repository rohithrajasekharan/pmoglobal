import Banner from "@/components/home/Banner";
import Expertise from "@/components/home/Expertise";
import Experience from "@/components/home/Experience";
import Partner from "@/components/home/Partner";
import Projects from "@/components/home/Projects";
import Client from "@/components/home/Client";
import Contact from "@/components/home/Contact";
import News from "@/components/home/News";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <Expertise />
      <Experience />
      <Partner />
      <Projects />
      <Client />
      <Contact />
      <News />
    </main>
  );
}
