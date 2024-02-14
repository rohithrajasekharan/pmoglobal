import Image from "next/image";

export default function Collaborators() {
  return (
    <section className="w-full bg-[#F4F4F4] text-center">
      <div className="inline-block bg-gray-200 border-l-4 border-[#DC1E00] px-3 py-2 text-sm font-medium mb-10">
        Collaborators
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-zinc-800 bg-opacity-95 p-4">
          <div className="w-full h-auto col-span-2">
            <Image src="/collab1.png" height={300} width={600} alt="" />
          </div>
          <div className="text-white text-left space-y-4 col-span-1">
            <h2 className="text-xl">PMO & WAT</h2>
            <p className="text-white text-sm">
              PMO Global teams up with the Western Area Trading (WAT), Bahrain,
              for major repairs and conversion projects in Bahrain
              and Saudi Arabia.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-zinc-800 bg-opacity-95 p-4">
          <div className="w-full h-auto col-span-2">
            <Image src="/collab2.png" height={300} width={600} alt="" />
          </div>
          <div className="text-white text-left space-y-4 col-span-1">
            <h2 className="text-xl">PMO & PWO</h2>
            <p className="text-white text-sm">
              Powering Nigeria&apos;s future together in Offshore Living Quarters and
              Technical Building EPC Contracts - A synergy of excellence!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
