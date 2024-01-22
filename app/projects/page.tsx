import Banner from "@/components/projects/Banner";
import Deliveries from "@/components/projects/Deliveries";
import Gallery from "@/components/projects/Gallery";
import { Services } from "@/components/projects/Services";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <Deliveries />
      <Services />
      <Gallery />
    </main>
  );
}
