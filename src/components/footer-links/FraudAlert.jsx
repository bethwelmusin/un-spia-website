import React from "react";

const FraudAlert = () => {
  return (
    <div>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Card */}
          <div className="col-span-2 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-red-500">Fraud Alert</h2>
            <div className="space-y-4">
              <p className="font-bold text-yellow-500">
                Fraud Alert Beware of scams implying association with the United
                Nations
              </p>

              <p>
                The United Nations has been made aware of various
                correspondences, being circulated via e-mail, from Internet web
                sites, text messages and via regular mail or facsimile, falsely
                stating that they are issued by, or in association with the
                United Nations and/or its officials. These scams, which may seek
                to obtain money and/or in many cases personal details from the
                recipients of such correspondence, are fraudulent. The United
                Nations wishes to warn the public at large about these
                fraudulent activities being perpetrated purportedly in the name
                of the Organisation, and/or its officials, through different
                fraud schemes.
              </p>
              <p>
                The United Nations does not charge a fee at any stage of its
                recruitment process (application, interview, processing,
                training) or other fee, or request information on applicants
                bank accounts. To apply for a job go to careers.un.org and click
                on Vacancies. See more on employment-related fraud. The United
                Nations does not charge a fee at any stage of its procurement
                process (supplier registration, bids submission) or other fee.
                Visit the Procurement Division to see the latest business
                opportunities with the United Nations.
              </p>
              <p>
                The United Nations does not request any information related to
                bank accounts or other private information. The United Nations
                does not offer prizes, awards, funds, certificates, automated
                teller machine (ATM) cards, compensation for Internet fraud, or
                scholarships, or conduct lotteries. The United Nations does not
                approve military vacations or pensions, or release packages in
                exchange for a fee.
              </p>

              <p>
                The United Nations strongly recommends that the recipients of
                solicitations, such as those described above exercise extreme
                caution in respect of such solicitations. Financial loss and
                identity theft could result from the transfer of money or
                personal information to those issuing such fraudulent
                correspondence. Victims of such scams may also report them to
                their local law enforcement authorities for appropriate action.
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

export default FraudAlert;
