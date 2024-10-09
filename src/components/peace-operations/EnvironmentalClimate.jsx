import React from 'react';

const History = () => {
  return (
    <div>
       <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Card */}
        <div className="col-span-2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">International Day of Peacekeepers</h2>
          <div className="space-y-4">

            <p>
            It was on May 31, 2018 that the UN Soldiers of Peace International Association (AISP/SPIA) was at the Palais des Nations in Geneva, bringing together more than 350 people to celebrate the International Day of Peacekeepers . This day particularly marked the history of the NGO and all the Blue Helmets since it celebrated the 70th anniversary of peacekeeping operations.
            </p>
            <p>
                
            </p>
            <img
              src="https://via.placeholder.com/600x300"
              alt="Placeholder"
              className="w-full rounded-lg shadow-md"
            />
            <p>
              Suspendisse potenti. Phasellus non volutpat felis. Maecenas nec
              dui eu mauris gravida finibus. Integer viverra ligula a facilisis
              sollicitudin. Curabitur laoreet lacus ut libero luctus, nec
              fringilla lorem dignissim.
            </p>
            <img
              src="https://via.placeholder.com/600x300"
              alt="Placeholder"
              className="w-full rounded-lg shadow-md"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              et dolor sed odio vestibulum ullamcorper. Donec sed ipsum
              fermentum, fringilla nunc a, ornare mauris.
            </p>
            <p>
              Integer scelerisque sapien ut odio vehicula, nec aliquet ante
              interdum. In id leo eu felis posuere tincidunt. Vivamus malesuada
              sapien purus, nec dapibus risus dictum ac.
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

export default History;
