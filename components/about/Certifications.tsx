import Image from "next/image";

export default function Certifications() {
  return (
    <section className="w-full bg-[#F4F4F4] text-center pb-10">
      <div className="inline-block bg-gray-200 border-l-4 border-[#DC1E00] px-3 py-2 text-sm font-medium mb-10">
        Certification
      </div>
      <div className="container px-4 md:px-6 max-w-[600px]">
        <div className="grid gap-8 mt-10 grid-cols-3 items-center justify-items-center mb-12">
            <div>
            <Image
              alt="Team member"
              className="w-36 h-auto aspect-[1/1] overflow-hidden object-cover object-center"
              height="300"
              src="/cert1.png"
              width="300"
            />
            </div>
            <div>
            <Image
              alt="Team member"
              className="w-36 h-auto aspect-[1/1] overflow-hidden object-cover object-center"
              height="300"
              src="/cert2.png"
              width="300"
            />
            </div>
            <div>
            <Image
              alt="Team member"
              className="w-36 h-auto aspect-[1/1] overflow-hidden object-cover object-center"
              height="300"
              src="/cert3.png"
              width="300"
            />
            </div>
        </div>
      </div>
    </section>
  );
}
