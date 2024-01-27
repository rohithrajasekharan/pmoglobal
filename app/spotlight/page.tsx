"use client"
import Banner from "@/components/spotlight/Banner";
import Blogs from "@/components/spotlight/Blogs";
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

export default async function Spotlight() {
  const articles = await retrieveData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <Blogs data={articles}/>
    </main>
  );
}
