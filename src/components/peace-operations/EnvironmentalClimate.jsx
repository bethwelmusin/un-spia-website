import React from 'react';
import ClimateLogo from "../../assets/greening.jpg"

const EnvironmentalClimate = () => {
  return (
    <div>
       <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Card */}
        <div className="col-span-2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Environmental and Climate-Sensitive Approachs</h2>
          <div className="space-y-4">

          <img
              src={ClimateLogo}
              alt="Placeholder"
              className="w-full rounded-lg shadow-md"
            />

            <p className='font-bold'>
            Toward an Environmental and Climate-Sensitive Approach to Protection in UN Peacekeeping Operations.            </p>
            <p>
                
            </p>
         
            <p>
            Environmental degradation, including degradation caused by climate change, armed conflict, or the illegal exploitation of resources, can be a catalyst for violence against civilians. When environmental degradation contributes to violence, UN peacekeeping operations should include environmental and climate security considerations in their assessment and planning, as well as in the implementation of their mandated activities related to protection.

While several missions have environmental and climate-related language in their mandates, thus far, they have primarily emphasized the reduction of their environmental footprint. Nevertheless, given the number of missions that operate in contexts affected by climate change, the UN Department of Peace Operations (DPO) has signaled its intention to focus more on climate-related security threats, including by joining the Climate Security Mechanism in December 2021. However, peacekeeping operations could take additional steps to better factor environmental and climate-related risks into their planning and activities related to protection.
            </p>
            <p>
            By including environmental and climate-related factors in assessments and planning, UN peacekeeping operations could prevent conflict more effectively, including by identifying potential hot spots for resource-related violence. There are also opportunities for missions to more systematically integrate environmental and climate-related considerations into activities related to protection, including support to environmental peacebuilding and mediation. Moreover, missions could engage with state and non-state actors to reinforce the rules of international humanitarian law pertaining to respect for the natural environment in armed conflict and help strengthen domestic capacity and expertise to promote accountability for protecting the natural environment. Finally, collaboration with UN country teams is vital for missions to address the root causes of environmental degradation that go beyond their mandates, particularly when preparing transition and exit strategies.
            </p>
            <p>
            While some missions are already engaging in good practices in this regard, these efforts could be more systematic, and missions could continue exploring new approaches. Likewise, at headquarters, while DPO has taken incremental steps to increase its engagement on climate security, these steps should only be the beginning, especially as environmental conditions worsen in the years ahead.
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

export default EnvironmentalClimate;
