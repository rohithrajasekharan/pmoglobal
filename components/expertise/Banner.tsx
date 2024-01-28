import Navbar from "../Navbar";

export default function Banner() {
  return (
    <main
      className="w-full h-full min-h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: "url(/expertise_banner_bg.png)",
      }}
    >
      <Navbar selected="expertise"/>
      <div className="flex items-center justify-center h-[600px]">
        <div className="text-center m-4">
          <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-gray-200 bg-opacity-10 border-l-4 border-red-500 mb-2">
          Expertise
        </div>
            <h1 className="text-3xl lg:text-5xl text-white font-bold max-w-[600px] mx-auto my-6">
            Engineering Excellence Enabling Your Success
            </h1>
            <p className="text-white max-w-[800px] mx-auto my-4">At PMO Global, we take pride in our diverse and comprehensive expertise, empowering us to deliver exceptional engineering solutions for a wide range of industries.</p>
            <p className="text-white max-w-[800px] mx-auto text-sm">With a focus on innovation, safety, and precision, our team of experts ensures that your projects are in capable hands from concept to completion.</p>
          </div>
      </div>
    </main>
  );
}