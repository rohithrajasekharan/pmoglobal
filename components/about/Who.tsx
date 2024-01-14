export default function Who() {
    return (
      <div className="flex flex-wrap h-screen justify-center mb-12">
        <div className="flex items-center justify-center">
          <img
            alt="Industrial landscape"
            className="h-auto max-h-[80%] w-auto max-w-full"
            height="300"
            src="/who.png"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
        </div>
        <div className="flex items-center justify-center p-8">
          <div className="max-w-md">
          <p className="inline-block px-3 py-1 text-sm tracking-tighter border-l-4 border-red-500 bg-gray-200">
            Who We Are
          </p>
            <p className="mt-4 text-sm text-gray-700">
              <span className="font-bold">PMO Global</span> functions as a turnkey service provider in the outfitting of living quarters and technical
              buildings in the marine, offshore and renewable sectors. Through our extensive knowledge of project
              management skills, best practices, highly skilled resources, proven methodologies, and advanced tools, we
              operate to foster an environment of collaboration and innovation, ensuring objectives are met at every
              stage. We understand our clients' core needs and engage with them successfully from BID to BUILD.
            </p>
            <p className="mt-4 text-sm text-gray-700">
              We have a focused outlook to provide clients with professional value-added services conducted in time, to
              budget, quality and most importantly – safely.
            </p>
            <p className="mt-4 text-sm text-gray-700">
              We embark into the future with a common belief of maximizing benefits for all stakeholders and living
              sustainably.
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  