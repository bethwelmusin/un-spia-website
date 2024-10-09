import React from 'react';
import Pic from "../../assets/un-operations.jpg"

const UnOperations = () => {
  return (
    <div>
       <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Card */}
        <div className="col-span-2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">International Day of Peacekeepers</h2>
          <div className="space-y-4">

            <p className='font-bold'>
            UN Peacekeeping is the largest and most visible representation of the United Nations. It is a collective investment in global peace, security, and stability.            </p>
            <p>
                
            </p>
            <img
              src={Pic}
              alt="Placeholder"
              className="w-full rounded-lg shadow-md"
            />
            <p>
            This investment has a proven track record. Over 70 years, our peacekeepers have made a tangible difference in the lives of hundreds of millions of the world’s most vulnerable people, creating conditions for lasting peace, but a viable political process is central to the work of our operations, as peacekeeping is meant to support and not substitute national efforts.

Peacekeeping, however, is political and its success depends on active and sustainable political processes or the real prospect of a peace process. Peacekeeping cannot substitute for the political will and determination of the parties to end the conflict and protect their people, nor the host state’s sovereign responsibilities.

The Security Council has a vital role in securing this commitment and cooperation, while providing missions with realistic and clear mandates.

Peacekeepers protect civilians, actively prevent conflict, reduce violence, strengthen security and empower national authorities to assume these responsibilities. This requires a coherent security and peacebuilding strategy that supports the political strategy. UN peacekeeping helps host countries to become more resilient to conflict, laying the groundwork to sustain long-term peace, including by addressing root causes of conflict.
            </p>
       
            <p>
            A strong an effective partnership between the UN Secretariat, the Security Council and the countries that contribute uniformed personnel, has made possible for 55 peacekeeping operations around the world to have, through the years, successfully completed their mandate. This partnership is essential as we continue to evolve, striving every day to become more agile and adapt to the volatile environments we operate in. UN peacekeeping is also committed to working smarter and using modern technology as well as other innovations.
            </p>
            <p className='font-bold'>All of this allows our peacekeepers to:
</p>
            <p>
            -Protect civilians<br></br>
-Prevent conflicts<br></br>
-Build Rule of Law and security institutions<br></br>
-Promote human rights<br></br>
-Empower women<br></br>
-Deliver field support
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

export default UnOperations;
