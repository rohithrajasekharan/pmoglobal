export default function Deliveries() {
  return (
    <div className="flex justify-center mt-8">
    <div className="flex flex-wrap items-center justify-center border-r pr-6 border-t border-b border-gray-200 py-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">100 m+</h2>
      <div className="flex items-center justify-center ml-4">
        <span className="bg-[#DC1E00]
 h-3 w-3 mr-2" />
        <p className="text-sm md:text-lg text-gray-800">
          EPC Project Delivered
        </p>
      </div>
    </div>
    <div className="flex flex-wrap items-center justify-center pl-6 border-t border-b border-gray-200 py-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">3 m+</h2>
      <div className="flex items-center justify-center ml-4">
        <span className="bg-[#DC1E00]
 h-3 w-3 mr-2" />
        <p className="text-sm md:text-lg text-gray-800">
          Manhours Managed
        </p>
      </div>
    </div>
  </div>
  )
}
