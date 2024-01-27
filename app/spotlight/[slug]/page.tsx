import Banner from "@/components/article/Banner";
import BlogPost from "@/components/article/BlogPost";
import { createClient } from "contentful";
import { redirect } from 'next/navigation'

async function retrieveData(slug:any){
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
    });
    console.log(response.items[0].fields.post)
    return response.items;
  } catch (error) { 
    redirect('/page-not-found')
  }
}

interface BlogProps {
  params: {
    slug: String
  }
}
const Blogs: React.FC<BlogProps> = async ({ params }) => {
  const article = await retrieveData(params.slug);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner data={article[0]} />
      <BlogPost data={article[0]} />
    </main>
  );
}

export default Blogs;
