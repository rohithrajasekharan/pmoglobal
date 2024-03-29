import Navbar from "../Navbar";


export default function Banner() {
  return (
    <main
      className="w-full h-[500px] bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url(/contact_banner_bg.png)",
      }}
    >
      <Navbar selected="contact"/>
        <div className="flex items-center mt-[8rem]">
          <div className="container flex flex-col items-start space-y-4 mx-[2%] sm:mx-[5%] md:mx-[10%] lg:mx-[10%] pb-4">
          <div className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-white bg-gray-200 bg-opacity-10 border-l-4 border-[#DC1E00] mb-2">
          Contact
        </div>
            <h1 className="text-3xl lg:text-5xl text-white font-bold">
              Contact Us
            </h1>
          </div>
        </div>
    </main>
  );
}