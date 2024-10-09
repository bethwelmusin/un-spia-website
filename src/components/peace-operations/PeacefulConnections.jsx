import React from 'react';
import Unity from "../../assets/unity.jpg"

const PeacefulConnections = () => {
  return (
    <div>
       <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Card */}
        <div className="col-span-2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">International Day of Peacekeepers</h2>
          <div className="space-y-4">
          <img
              src={Unity}
              alt="Placeholder"
              className="w-full rounded-lg shadow-md"
            />

            <p>
            Unity, connection, compassion, and nonviolence - core values is associated with our peace projects. This is a UN-SPIA Civil initiative focused on promoting global understanding, conflict resolution, or community-level peacebuilding efforts.


Peacebuilding efforts aim to manage, mitigate, resolve and transform central aspects of the conflict through official diplomacy; as well as through civil society peace processes and informal dialogue, negotiation, and mediation.
            </p>
            <h4>All Humans are Related to One Another
            </h4>
            <p>
            The EPC Program applies a values-based approach to peacebuilding that emphasizes universal principles and shared values as a basis to address conflict, promote equitable and sustainable development, and engage all members of the human family as necessary and valuable contributors to building a culture of peace. EPC field work is advanced in four key areas of focus, each supported by the conviction that all people belong to one human family with a shared origin.
   
            </p>
            <h4>Social Cohesion and Peacebuilding</h4>
            <p>
            EPC fieldwork brings together diverse stakeholders to further cross-community reconciliation, prevent violent extremism, and develop community-driven models of peacebuilding. This approach: Emphasizes principles and shared values to foster connection between different groups<br></br>
            Furthers dialogue and engagement to build trust and understanding Equips community members with skills for problem solving and conflict management
Promotes peace as a basis for investment and economic development Develops conflict management skills to further mutual understanding and common ground

            </p>
            <h4>Character and Leadership Development</h4>
        
            <p>
            EPC places special importance on engaging youth and leaders in civil society, the private sector, educational systems, and government to provide moral and innovative leadership to meet complex social, political, and environmental challenges.EPC leadership projects and training:

Build awareness of core leadership values: live for the greater good, dream big, take ownership, and teamwork

Promote holistic growth and good character as integral to education and leadership development

Transmit skills that cultivate character, creativity, and excellence Demonstrate high ethical standards and model good behavior in leadership roles Develop and apply effective and creative solutions to local, regional, and national issues
            </p>
            <h4>Fostering Civic Virtue</h4>
           
            <p>
            EPC supports responsible, informed citizenship and works to strengthen the underlying values that foster social cohesion, promote robust civic engagement, and respect for essential rights and freedoms, including freedoms of conscience and religion. Through education, expert convenings of political and civil society leaders, and cross-cultural service initiatives, EPC works to:
Increase recognition of our interconnectedness, inherent human dignity, and the need to respect essential human rights and freedoms
Empower civil society, especially faith communities, to engage as active citizens and participate in the public square at local and national levels
Cultivate service and volunteerism throughout all levels of society
Advance public understanding and protection of essential rights, including freedom of conscience and religion Secure higher levels of sustainable peace, tolerance, and interreligious cooperation
            </p>
            <h4>Pathways for National Transformation</h4>
            <p>
            All people are subject to national sovereignty in the modern world order. This includes the utilization of public resources and the authority to promote the general welfare through state-level action. EPC works to facilitate the growth of ethical societies and sustainable peace on a national level in collaboration with public, private, and civil society partners. Through these partnerships EPC works to:
Increase recognition of universal principles and shared values as essential to an ethical nation
Create family-friendly policies and a social environment that supports strong families as the basis for nurturing ethical citizens
Promote healthy civic discourse toward the ideal of unity in diversity throughout society
Foster multi-sector collaboration to solve problems and build peace, stability, and prosperity
Establish pathways to peace and sustainable development on a national level Foster greater civic engagement and participation in advancing shared national goals
Expand successful, holistic practices of peace and sustainable development to other nations
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

export default PeacefulConnections;
