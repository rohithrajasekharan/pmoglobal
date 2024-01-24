import Link from "next/link";
import Image from "next/image";

function getMonthName(monthIndex: any) {
  if (/^(0[1-9]|1[0-2])$/.test(monthIndex)) {
    const date = new Date(`2022-${monthIndex}-01`);
    const options: any = { month: "long" };
    return date.toLocaleDateString("en-US", options);
  } else {
    return "Invalid month index";
  }
}

const Blogs = (props: any) => {
  return (
    <div className="bg-white py-12 px-8">
      <div className="w-fit items-center justify-center px-3 py-1 text-sm text-black bg-gray-200 border-l-4 border-red-500 mb-4 mx-auto">
        Our Blog
      </div>
      <h2 className="text-2xl font-bold mb-12 text-center">Our Latest News</h2>
      <div className="grid gap-4 justify-center">
        {props.data.map((item: any, index: any) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-7 justify-start items-start mx-auto max-w-4xl"
          >
            <div className="col-span-3 justify-center items-center mb-4">
              <Image
                alt="News image"
                className="w-full h-50 object-cover object-top"
                height={500}
                src={`https:${item.fields.featureImage.fields.file.url}`}
                style={{
                  aspectRatio: "200/150",
                  objectFit: "cover",
                }}
                width={700}
              />
            </div>
            <div className="col-span-1 justify-center items-start">
              <div className="flex flex-col md:items-center mb-4">
                <span className="text-lg font-semibold">
                  {item.fields.publishedOn.split("-")[2]}
                </span>
                <span className="text-sm">
                  {getMonthName(item.fields.publishedOn.split("-")[1])}
                </span>
              </div>
            </div>
            <div className="col-span-3 mb-8">
              <Link href={`/spotlight/${item.fields.slug}`}><h3 className="text-xl font-semibold mb-2">
                {item.fields.title}
              </h3></Link>
              <p className="text-sm mb-4 whitespace-pre-wrap">
                {item.fields.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* <Button className="text-sm lg:text-base bg-[#2B2B2B] text-white py-2 rounded my-[35px] mb-12 block mx-auto min-w-[150px]">
        More Blog
      </Button> */}
    </div>
  );
};

export default Blogs;
