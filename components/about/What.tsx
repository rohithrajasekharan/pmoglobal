import Image from "next/image";

export default function What() {
    return (
        <div key="1" className="relative w-full bg-gray-200">
        <div className="flex items-center justify-center mt-20 mb-48">
          <div className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[70%] bg-white p-6 md:p-[5%] rounded-lg">
            <div  className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="inline-block bg-gray-200 border-l-4 border-red-500 px-3 py-2 py-1 text-sm font-medium">
                  What We Do
                </div>
                <h2 className="text-2xl font-bold tracking-tighter">
                Delivering Tailored Solutions
                </h2>
                <p className="text-gray-500">
                Our core focus is to function as a project management office that specializes in standardizing project-related governance processes. Our expertise lies in standardizing project-related governance processes and optimizing EPC management with proven methodologies and advanced tools.
                </p>
              </div>
              <div className="w-full h-auto">
                <Image
                  alt="Placeholder"
                  className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center min-h-[300px]"
                  height={300}
                  src="/speaking_experience.png"
                  width="400"
                />
              </div>
            </div>
            <section className="w-[80%] bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 mt-0 sm:mt-0 md:mt-0 lg:mt-[-3rem] py-4 pr-4 rounded-lg relative z-10">
              <div className="bg-black text-white p-4 rounded-lg flex items-center justify-center">
                <p className="font-semibold text-sm text-center">
                  New Build EPC Solutions
                </p>
              </div>
              <div className="bg-black text-white p-4 rounded-lg flex items-center justify-center">
                <p className="font-semibold text-sm text-center">
                  Repair, Conversions & Upgrades
                </p>
              </div>
              <div className="bg-black text-white p-4 rounded-lg flex items-center justify-center">
                <p className="font-semibold text-sm text-center">
                  Modular Building & Steel Fabrications
                </p>
              </div>
              <div className="bg-black text-white p-4 rounded-lg flex items-center justify-center">
                <p className="font-semibold text-sm text-center">
                  Engineering Services
                </p>
              </div>
              <div className="bg-black text-white p-4 rounded-lg flex items-center justify-center">
                <p className="font-semibold text-sm text-center">
                  Technical Manpower Resources
                </p>
              </div>
              <div className="bg-black text-white p-4 rounded-lg flex items-center justify-center">
                <p className="font-semibold text-sm text-center">
                  Project & Construction Management Solutions
                </p>
              </div>
              <div className="bg-black text-white p-4 rounded-lg flex items-center justify-center">
                <p className="font-semibold text-sm text-center">
                  Turnkey Solutions
                </p>
              </div>
              <div className="bg-black text-white p-4 rounded-lg flex items-center justify-center">
                <p className="font-semibold text-sm text-center">
                  Cost Control & Optimization
                </p>
              </div>
            </section>
            <div className="flex justify-center" style={{ maxHeight: "300px" }}>
              <div className="flex flex-wrap items-center justify-center border-r pr-6 border-t border-b border-gray-200 py-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">100 m+</h2>
                <div className="flex items-center justify-center ml-4">
                  <span className="bg-red-600 h-3 w-3 mr-2" />
                  <p className="text-sm md:text-lg text-gray-800">
                    EPC Project Delivered
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center pl-6 border-t border-b border-gray-200 py-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">3 m+</h2>
                <div className="flex items-center justify-center ml-4">
                  <span className="bg-red-600 h-3 w-3 mr-2" />
                  <p className="text-sm md:text-lg text-gray-800">
                    Manhours Managed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  