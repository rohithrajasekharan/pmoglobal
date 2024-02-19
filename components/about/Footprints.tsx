import Image from "next/image";

export default function FootPrints() {
  return (
    <div className="text-center">
      <div className="inline-block bg-gray-200 border-l-4 border-[#DC1E00] px-3 py-2 py-1 text-sm font-medium mb-10">
        Our Footprints
      </div>
      <div className="w-full h-auto">
        <Image height={1500} width={1500} alt="Placeholder" src="/map.svg" className="mb-10"/>
      </div>
    </div>
  );
}
