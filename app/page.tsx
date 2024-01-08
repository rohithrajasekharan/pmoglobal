import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Partner from "@/components/Partner";
import Projects from "@/components/Projects";
import Client from "@/components/Client";
import Contact from "@/components/Contact";
import News from "@/components/News";

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
