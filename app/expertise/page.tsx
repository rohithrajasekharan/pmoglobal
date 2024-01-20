import Banner from "@/components/expertise/Banner";
import Quote from "@/components/expertise/Quote";
import { Services } from "@/components/expertise/Services";

export default function Expertise() {
    return (
      <main className="flex min-h-screen flex-col items-center">
        <Banner />
        <Services />
        <Quote />
      </main>
    );
  }
  