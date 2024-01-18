import Image from "next/image";

export default function FootPrints() {
  return (
    <div className="text-center">
      <div className="inline-block bg-gray-200 border-l-4 border-red-500 px-3 py-2 py-1 text-sm font-medium mb-10">
        Our Footprints
      </div>
      <div className="w-full h-auto">
        <Image height={1000} width={1000} alt="Placeholder" src="/map.png" className="mb-10"/>
      </div>
    </div>
  );
}
