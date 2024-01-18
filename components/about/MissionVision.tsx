export default function MissionVision() {
    return (
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-8 mt-[-120px] mb-[100px] z-30">
        <div className="bg-black text-white rounded-lg p-4 md:p-8 max-w-[350px] min-h-[200px]">
          <div className="border-l-4 border-red-500 pl-2">
            <h2 className="text-xl font-bold">Our Mission</h2>
          </div>
          <p className="mt-2 text-gray-200 text-sm">
          To be the global leader in project management through collaborative strategies, resource optimization and technological 
          innovation while resiliently developing an environment that maximizes stakeholder benefits and allows us to be an employer
           of choice.
          </p>
        </div>
        <div className="bg-black text-white rounded-lg p-4 md:p-8 max-w-[350px] min-h-[200px]">
          <div className="border-l-4 border-red-500 pl-2">
            <h2 className="text-xl font-bold">Our Vision</h2>
          </div>
          <p className="mt-2 text-gray-200 text-sm">
          To utilize our experience with process-driven systems and best practices to achieve optimization in the energy sector.
          </p>
        </div>
      </div>
    )
  }
  
  