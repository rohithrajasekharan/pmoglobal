import Navbar from "../Navbar";

export default function Banner() {
  return (
    <main
      className="w-full h-full min-h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: "url(/projects_banner_bg.png)",
      }}
    >
      <Navbar selected="projects"/>
      <div className="flex items-center justify-center h-[600px]">
        <div className="text-center m-4">
          <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-gray-200 bg-opacity-10 border-l-4 border-red-500 mb-2">
          Projects
        </div>
            <h1 className="text-3xl lg:text-5xl text-white font-bold max-w-[600px] mx-auto my-6">
            Our Projects
            </h1>
            <p className="text-white max-w-[800px] mx-auto my-4">At PMO Global, we take immense pride in our portfolio of successful projects that reflects our commitment to delivering exceptional services. From completed ventures that stand as testaments to our expertise to ongoing projects shaping a brighter future, explore our diverse portfolio that showcases innovation, precision, and excellence at every stage.</p>
          </div>
      </div>
    </main>
  );
}