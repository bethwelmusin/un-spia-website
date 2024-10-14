import React from 'react';
import Pic from "../../assets/rw.jpg"

const ExpertPool = () => {
  return (
    <div>
       <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Card */}
        <div className="col-span-2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Expert Pool for Civilian Peacebuilding</h2>
          <div className="space-y-4">

            <p>
            Every year, UN-SPIA sends some 200 civilian experts to Local organisations to promote peace and human rights. These experts work either at the Local grassroots organisations or at peace missions in regions affected by conflict. Since its launch in 2000, the UN-SPIA Pool for Civilian Peacebuilding (EPC) has been an effective peace and human rights policy instrument for UN-SPIA            </p>
            <p>
                
            </p>
            <img
              src={Pic}
              alt="Placeholder"
              className="w-full rounded-lg shadow-md"
            />
            <h4>EMPOWERING PEACEFUL CONNECTIONS</h4>
            <p>
            Efforts to re-establish a well-functioning state governed by the rule of law are a crucial part of reconstruction following an armed conflict, giving people security and restoring the necessary trust in state institutions. Civilian experts provide inputs to help build states governed by the rule of law or mediate in conflicts. They help in the planning and running of elections or take part in election observation missions. They also advise judicial and police authorities in forensics or assist border authorities in migration or customs matters.


On average, some 100 experts are deployed at any given time. The UN, and STATE PARTIES are the pool's main partners. Experts are taking part in the Special Monitoring Mission to South Sudan. Also Civilian Experts are on mission in Mali as well as in the Democratic Republic of the Congo.
            </p>
            <h4>UN-SPIA engagement for peace. Three portraits</h4>
           
            <p>
            The Expert Pool for Un-SPIA Civilian Peacebuilding seconds experts to international organizations. They go about their work, receive and provide training, and support to local staff.
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

export default ExpertPool;
