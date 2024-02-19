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
      <div className="w-fit items-center justify-center px-3 py-1 text-sm text-black bg-gray-200 border-l-4 border-[#DC1E00] mb-4 mx-auto">
        Our Blog
      </div>
      <h2 className="text-2xl font-bold mb-12 text-center">Our Latest News</h2>
      <div className="grid gap-4 justify-center">
        {props.data.map((item: any, index: any) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-7 justify-start items-start mx-auto max-w-4xl border-t border-[#D6D6D6] py-6"
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
              <div className="flex flex-col md:items-center mb-4 space-y-1">
                <DateIcon/>
                <span className="text-3xl font-semibold">
                  {item.fields.publishedOn.split("-")[2]}
                </span>
                <span className="text-sm">
                  {getMonthName(item.fields.publishedOn.split("-")[1])}
                </span>
              </div>
            </div>
            <div className="col-span-3 mb-8 border-l border-[#D6D6D6] px-6">
              <Link href={`/spotlight/${item.fields.slug}`}><h3 className="text-xl font-semibold mb-2 hover:text-red-500">
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

function DateIcon() {
  return (
    <svg width="53" height="58" viewBox="0 0 53 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="11" y="28" width="6" height="6" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="11" y="41" width="6" height="6" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="24" y="28" width="6" height="6" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="24" y="41" width="6" height="6" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="36" y="28" width="6" height="6" fill="#DC1E00" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="36" y="41" width="6" height="6" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 20H1V9C1 7.34315 2.34315 6 4 6H49C50.6569 6 52 7.34315 52 9V20Z" fill="#DC1E00" />
      <path d="M50 5.66699H3.33333C2.04467 5.66699 1 6.71166 1 8.00033V54.667C1 55.9557 2.04467 57.0003 3.33333 57.0003H50C51.2887 57.0003 52.3333 55.9557 52.3333 54.667V8.00033C52.3333 6.71166 51.2887 5.66699 50 5.66699Z" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40.667 1V10.3333" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.667 1V10.3333" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 19.667H52.3333" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}
