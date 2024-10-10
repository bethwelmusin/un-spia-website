import React from 'react';
import Pic from "../../assets/environment.jpg"

const Greening = () => {
  return (
    <div>
       <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Card */}
        <div className="col-span-2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Greening the blue helmets</h2>
          <div className="space-y-4">

             <p>
             This two-year analysis by the United Nations Environment Programme (UNEP) opens a new chapter for the UN in leading by example towards a greener and more equitable world. It is the result of ongoing collaboration between UNEP and the UN Department of Field Support (DFS) and the UN Department of Peacekeeping Operations (DPKO) to increase the consideration given to natural resources and environmental issues in UN peacekeeping efforts. Following violent conflict, a country's natural resources are its primary assets, which can help kick-start economic recovery, employment and livelihoods. Early decisions on how they are used, managed and allocated can have fundamental implications for short-term stability, security and peacebuilding


             </p>
             <img
              src={Pic}
              alt="Placeholder"
              className="w-full rounded-lg shadow-md"
            />
    
             <p>
             While 25 percent of UN peacekeeping missions since 1948 have had a direct or indirect mandate to address natural resources, the broader issues surrounding natural resource and environmental management have until now not garnered sufficient attention within the peacekeeping community. This report shows that peacekeeping operations not only have important natural resource implications, as well as significant impacts on the environment, but also that natural resources are often a fundamental aspect of conflict resolution, livelihoods and confidence-building at the local level. It is therefore important that UN peacekeeping missions be given a more systematic mandate to support national authorities in restoring the administration of natural resources like diamonds, gold, oil and timber, in cases where they have fuelled or financed violence, or become militarized.

             </p>
             <p>
             With more natural resource provisions in peace agreements today, it is also clear that there is a need for the international community and peacekeeping operations in particular to build new capacities and partnerships to be able to support the implementation of these provisions. The report concludes that addressing the risks and opportunities presented by natural resources is often critical to the success of UN peacekeeping efforts and can no longer be seen as distinct from the maintenance of peace and security. At the same time, the report also highlights the positive efforts that have been undertaken to reduce the environmental impacts of UN peacekeeping operations. By adopting creative and transformational practices, technologies and behaviours, peacekeeping missions can curtail energy and water use and waste production, and also generate significant financial savings. The improved health, safety and security of local communities and personnel, self-sufficiency of camps and reduced potential for disputes with local communities are further benefits. The two parts of the report are inherently connected showcasing better environmental practices and minimizing the impacts of peacekeeping operations are necessary prerequisites and form a foundation for engagement and building confidence at the community level.
             </p>
           
       
          </div>
        </div>

        {/* Upcoming Events Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {/* Event 1 */}
            <div className="flex space-x-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Event 1"
                className="w-20 h-20 rounded-lg shadow-md"
              />
              <div>
                <h3 className="font-semibold text-lg">Event 1</h3>
                <p className="text-sm text-gray-600">
                  A charity event to support local communities.
                </p>
                <p className="text-sm font-light">12th Oct, 2024 - Nairobi, Kenya</p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="flex space-x-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Event 2"
                className="w-20 h-20 rounded-lg shadow-md"
              />
              <div>
                <h3 className="font-semibold text-lg">Event 2</h3>
                <p className="text-sm text-gray-600">
                  Environmental awareness campaign and workshop.
                </p>
                <p className="text-sm font-light">15th Oct, 2024 - Mombasa, Kenya</p>
              </div>
            </div>

            {/* Event 3 */}
            <div className="flex space-x-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Event 3"
                className="w-20 h-20 rounded-lg shadow-md"
              />
              <div>
                <h3 className="font-semibold text-lg">Event 3</h3>
                <p className="text-sm text-gray-600">
                  Fundraising marathon for youth empowerment.
                </p>
                <p className="text-sm font-light">22nd Oct, 2024 - Kisumu, Kenya</p>
              </div>
            </div>

            {/* Event 4 */}
            <div className="flex space-x-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Event 4"
                className="w-20 h-20 rounded-lg shadow-md"
              />
              <div>
                <h3 className="font-semibold text-lg">Event 4</h3>
                <p className="text-sm text-gray-600">
                  Leadership conference for peace and development.
                </p>
                <p className="text-sm font-light">1st Nov, 2024 - Nakuru, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Greening;
