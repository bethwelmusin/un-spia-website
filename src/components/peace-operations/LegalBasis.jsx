import React from "react";
import Legal from "../../assets/legal.jpg";
const LegalBasis = () => {
  return (
    <div>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Card */}
          <div className="col-span-2 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Legal Basis</h2>
            <div className="space-y-4">
              <img
                src={Legal}
                alt="Placeholder"
                className="w-full rounded-lg shadow-md"
              />

              <p>
                The typology of peace operations presented in this report
                focuses on operational aspects. It should help decisionmakers to
                understand the limitations of peace operations, to select the
                optimal type of operation for a given situation, and to evaluate
                the success of an operation.
              </p>
              <p className="font-bold">Legal Basis of Peace Operations</p>

              <p>
                The Charter of the United Nations describes a system of
                collective security having two modalities: pacific settlement
                (Chapter VI) and action with respect to threats to the peace
                (Chapter VII). Chapter VI lists the traditional techniques of
                diplomacy, including negotiation, inquiry, mediation,
                conciliation, arbitration, judicial settlement, resort to
                regional agencies or arrangements, and other peaceful means.
                Chapter VII concerns forceful ways of dealing with threats to
                peace, breaches of peace, and acts of aggression. Article 42 of
                Chapter VII empowers the Security Council to take action by air,
                land, and sea forces to maintain or restore international peace
                and security.
              </p>

              <p>
                Over the past five decades, the Security Council has developed
                peace operations, an ad hoc response to conflict not addressed
                in the Charter. In practice, the Security Council has invoked
                both Chapter VI and Chapter VII. Invoking Chapter VI has implied
                that lethal force was authorized in self-defense while
                accomplishing the mandate. Invoking Chapter VII has implied that
                lethal force was authorized to accomplish the mandate, coercing
                parties if necessary.
              </p>
              <p className="font-bold">Criteria That Bound Peace Operations</p>
              <p>
                Consent and impartiality are the criteria that bound peace
                operations.
              </p>
              <p className="font-bold">Consent of the Parties</p>
              <p>
                Consent means that parties to a conflict are willing to help
                accomplish the mandate. Parties are entities that the Security
                Council believes are responsible for conflict, implying that
                they control significantly large forces, but not that they have
                any particular legal status. Parties have included clan leaders
                (Somalia), self-declared governments (Bosnian Serb authority in
                Pale), and, of course, member states in the United Nations. To
                date, no peace operation has been initiated without at least
                initial consent from the parties..
              </p>
              <p className="font-bold">Impartiality</p>
              <p>
                Impartiality means that the Security Council has decided not to
                take sides, based on its judgment that all parties share
                responsibility for a conflict; it identifies neither aggressor
                nor victim. Not taking sides implies that the Council will not
                try to attain the political-military aims of any one party to
                the exclusion of other parties' aims. Parties often insist that
                all actions of the peace force be neutral in their effect, i.e.,
                affect all parties equally. But even the least intrusive peace
                operation is highly unlikely to affect all parties equally.
              </p>
              <p>
                If the Security Council judges that the parties do not share
                responsibility but, rather, that there is an aggressor who bears
                all the responsibility, it may authorize a range of actions
                directed against the aggressor, as in Korea and Kuwait, but
                peace operations are precluded by definition.
              </p>
              <p className="font-bold">
                An Operational Typology of Peace Operations
              </p>
              <p>
                Peace operations are highly political, but they should also make
                operational sense; otherwise, military forces should not be
                employed. An operational typology looks at peace operations very
                much as a Force Commander must. With as much precision as the
                subject allows, this typology defines peace operations in ways
                that he would find helpful.
              </p>
              <p>
                Over the past five decades, the Security Council has authorized
                five types of peace operations: observation, interposition,
                transition, security for humanitarian aid, and peace
                enforcement. Observation and interposition together comprise the
                repertoire of traditional peace-keeping. Transition, security
                for humanitarian aid, and peace enforcement go beyond
                traditional peace-keeping and are therefore considered
                more-ambitious operations. Peace enforcement occurs when the
                Security Council responds forcefully to recalcitrance during
                operations conducted under Chapter VII. Each type of operation
                is described separately below.
              </p>
              <p className="font-bold">Observation</p>
              <p>
                In this type of operation, the peace force is expected to
                monitor compliance with agreements, international law, or
                resolutions of the Security Council; report violations; and
                often mediate resolution of violations among the parties. There
                are two subtypes of observation with different implications for
                decisionmakers. The first subtype is intended to help implement
                agreement among the parties. There is no implied commitment that
                the Security Council would respond in any particular way if
                violations occur. The second subtype is intended to deter. There
                is an implied commitment that the Security Council or member
                states acting on its behalf would respond with particular
                alacrity and severity in the event of violations.
              </p>
            </div>
            <div class="flex justify-center mt-4">
              <a href="/src/assets/legal-basis.pdf" download>
                <button class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Download PDF
                </button>
              </a>
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

export default LegalBasis;
