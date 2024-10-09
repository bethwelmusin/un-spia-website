import React from "react";

const PeaceKeepingOperations = () => {
  return (
    <div>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Card */}
          <div className="col-span-2 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              Peace Keeping Operations
            </h2>
            <div className="space-y-4">
              <p className="font-bold">
                United Nations Peacekeeping helps countries torn by conflict
                create conditions for lasting peace.{" "}
              </p>
              <p>
                <p>
                  Peacekeeping has proven to be one of the most effective tools
                  available to the UN to assist host countries navigate the
                  difficult path from conflict to peace. Peacekeeping has unique
                  strengths, including legitimacy, burden sharing, and an
                  ability to deploy and sustain troops and police from around
                  the globe, integrating them with civilian peacekeepers to
                  advance multidimensional mandates. UN peacekeepers provide
                  security and the political and peacebuilding support to help
                  countries make the difficult, early transition from conflict
                  to peace.
                </p>
              </p>

              <p className="font-bold">
                UN Peacekeeping is guided by three basic principles:
              </p>
              <p>
                1.Consent of the parties; 2. Impartiality; 3. Non-use of force
                except in self-defence and defence of the mandate. Peacekeeping
                is flexible and over the past two decades has been deployed in
                many configurations. There are currently 11 UN peacekeeping
                operations deployed on three continents. Today's
                multidimensional peacekeeping operations are called upon not
                only to maintain peace and security, but also to facilitate the
                political process, protect civilians, assist in the disarmament,
                demobilization and reintegration of former combatants; support
                the organization of elections, protect and promote human rights
                and assist in restoring the rule of law. Success is never
                guaranteed, because UN Peacekeeping almost by definition goes to
                the most physically and politically difficult environments.
                However, we have built up a demonstrable record of success over
                our 60 years of existence, including winning the Nobel Peace
                Prize. Peacekeeping has always been highly dynamic and has
                evolved in the face of new challenges. Former Secretary-General
                Ban Ki-moon established a 17-member High-level Independent Panel
                on UN Peace Operations to make a comprehensive assessment of the
                state of UN peace operations today, and the emerging needs of
                the future.
              </p>
              <p>
                Global partnership UN peacekeeping is a unique global
                partnership. It brings together the General Assembly, the
                Security Council, the Secretariat, troop and police contributors
                and the host governments in a combined effort to maintain
                international peace and security. Its strength lies in the
                legitimacy of the UN Charter and in the wide range of
                contributing countries that participate and provide precious
                resources.
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
                  <p className="text-sm font-light">
                    12th Oct, 2024 - Nairobi, Kenya
                  </p>
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
                  <p className="text-sm font-light">
                    15th Oct, 2024 - Mombasa, Kenya
                  </p>
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
                  <p className="text-sm font-light">
                    22nd Oct, 2024 - Kisumu, Kenya
                  </p>
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
                  <p className="text-sm font-light">
                    1st Nov, 2024 - Nakuru, Kenya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeaceKeepingOperations;
