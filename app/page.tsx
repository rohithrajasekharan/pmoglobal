import Banner from "@/components/home/Banner";
import Expertise from "@/components/home/Expertise";
import Experience from "@/components/home/Experience";
import Partner from "@/components/home/Partner";
import Projects from "@/components/home/Projects";
import Client from "@/components/home/Client";
import Contact from "@/components/home/Contact";
import News from "@/components/home/News";
import { createClient } from "contentful";


async function retrieveData(){
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    const response = await client.getEntries();
    return response.items;
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    return [];
  }
}

export default async function Home() {
  const articles = await retrieveData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <Expertise />
      <Experience />
      <Partner />
      <Projects />
      <Client />
      <Contact />
      <News data={articles}/>
    </main>
  );
}
