import { Button } from "./ui/button";

export default function News() {
  return (
    <div className="bg-white py-12 px-8">
      <div className="w-fit items-center justify-center px-3 py-1 text-sm font-medium text-black bg-gray-200 border-l-4 border-red-500 rounded-md mb-4 mx-auto">
        Our Blog
      </div>
      <h2 className="text-2xl font-bold mb-12 text-center">Our Latest News</h2>
      <div className="grid gap-4 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-7 justify-start items-start mx-auto max-w-4xl">
          <div className="col-span-3 justify-center items-center mb-4">
            <img
              alt="News image"
              className="w-full h-50 object-cover object-top"
              height="200"
              src="/blog1.png"
              style={{
                aspectRatio: "200/150",
                objectFit: "cover",
              }}
              width="150"
            />
          </div>
          <div className="col-span-1 justify-center items-start">
            <div className="flex flex-col md:items-center mb-4">
              <span className="text-lg font-semibold">08</span>
              <span className="text-sm">September</span>
            </div>
          </div>
          <div className="col-span-3 mb-8">
            <h3 className="text-xl font-semibold mb-2">
              Inland freight a worthy solution for your business
            </h3>
            <p className="text-sm mb-4">
              We are dedicated in creating added value for our customers by
              implementing modern technology in our services.
            </p>
            <ul className="text-sm list-disc pl-5">
              <li>Urgent transportation</li>
              <li>Digital & automated solutions</li>
              <li>Reliable & experienced staff</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 justify-start items-start mx-auto max-w-4xl">
          <div className="col-span-3 justify-center items-center mb-4">
            <img
              alt="News image"
              className="w-full h-50 object-cover object-top"
              height="200"
              src="/blog2.png"
              style={{
                aspectRatio: "200/150",
                objectFit: "cover",
              }}
              width="150"
            />
          </div>
          <div className="col-span-1 justify-center items-start">
            <div className="flex flex-col md:items-center mb-4">
              <span className="text-lg font-semibold">12</span>
              <span className="text-sm">September</span>
            </div>
          </div>
          <div className="col-span-3 mb-8">
            <h3 className="text-xl font-semibold mb-2">
              How technology can help redraw the supply chain map
            </h3>
            <p className="text-sm mb-4">
              We are dedicated in creating added value for our customers by
              implementing modern technology in our services.
            </p>
            <ul className="text-sm list-disc pl-5">
              <li>Urgent transportation</li>
              <li>Digital & automated solutions</li>
              <li>Reliable & experienced staff</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 justify-start items-start mx-auto max-w-4xl">
          <div className="col-span-3 justify-center items-center mb-4">
            <img
              alt="News image"
              className="w-full h-50 object-cover object-top"
              height="200"
              src="/blog3.png"
              style={{
                aspectRatio: "200/150",
                objectFit: "cover",
              }}
              width="150"
            />
          </div>
          <div className="col-span-1 justify-center items-start">
            <div className="flex flex-col md:items-center mb-4">
              <span className="text-lg font-semibold">25</span>
              <span className="text-sm">September</span>
            </div>
          </div>
          <div className="col-span-3 mb-8">
            <h3 className="text-xl font-semibold mb-2">
              Five things you should have ready for your broker
            </h3>
            <p className="text-sm mb-4">
              We are dedicated in creating added value for our customers by
              implementing modern technology in our services.
            </p>
            <ul className="text-sm list-disc pl-5">
              <li>Urgent transportation</li>
              <li>Digital & automated solutions</li>
              <li>Reliable & experienced staff</li>
            </ul>
          </div>
        </div>
      </div>
      <Button className="text-sm lg:text-base bg-[#2B2B2B] text-white py-2 rounded my-[35px] mb-12 block mx-auto min-w-[150px]">More Blog</Button>
    </div>
  );
}
