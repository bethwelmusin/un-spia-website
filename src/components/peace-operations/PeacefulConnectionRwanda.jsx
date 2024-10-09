import React from 'react';
import Pic1 from "../../assets/rw.jpg"
import Pic2 from "../../assets/rw1.jpg"
import Pic3 from "../../assets/rw2.jpg"
import Pic4 from "../../assets/rw3.jpg"

const PeacefulConnectionRwanda = () => {
  return (
    <div>
       <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Card */}
        <div className="col-span-2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">Empowering Peaceful Connections program in Rwanda</h2>
          <div className="space-y-4">
          <img
              src={Pic1}
              alt="Placeholder"
              className="w-full rounded-lg shadow-md"
            />

            <p>
            The Empowering Peaceful Connections program in Rwanda is a collaborative effort with three Rwandan partner organizations which addresses grievances from the 1994 genocide—focusing on a total of 16 communities where tensions remained particularly high.


We bridge deep divides to transform violent conflict: to foster reconciliation, interrupt cycles of violence, and strengthen community resilience. Through long-term partnerships and collaborations with local partners in conflict-affected areas, we help people discover their shared capacity for building peace.


The field of peacebuilding was relatively new, and some of our first projects fostered social healing following the genocide in Rwanda and the ethnic cleansing campaigns of the Bosnian War. In the decades since, we have led initiatives in a total of more than 35 conflict-affected countries.            </p>
            <p>
               
Our Center maintains a lean and nimble structure that centers on collaboration. Our core staff has extensive expertise in facilitating peacebuilding processes—including participatory program design and implementation, dialogue across deep divides, trauma-sensitive peacebuilding, and peace leadership development.


Through our global network of skilled peacebuilding associates and our close collaborations with partner organizations, EPC Center draws upon a wider field of expertise and cultural experience. In adapting our peacebuilding approach to each specific context, we engage with a range of people and organizations: civil society organizations and networks, grassroots communities, faith-based organizations, government ministries, multilateral organizations and development institutions, and when appropriate, armed groups.


All of our programs focus on building local capacity to respond effectively and nonviolently to future conflicts. In many cases, participants go on to create their own local peacebuilding organizations and networks that remain Karuna Center partners. Our work most often takes place where violent conflicts have pitted ethnic or religious groups against each other, and people are coping with the legacies of civil war or genocide. We also lead initiatives to bridge damaging social and political divides, and to train local leaders in conflict mitigation techniques during outbreaks of communal violence. 
            </p>
            <h4>Trauma healing:</h4>
         
            <p>
            After mass violence, psychological wounds live on in people who experienced, witnessed, or perpetrated atrocities. If this pain is not resolved, it can be passed on to the next generations – and could fuel future violence. Through the project’s trauma healing workshops, the Rwandan organization Healing and Rebuilding our Communities (HROC) provided in-depth education to more than 1,500 people in 16 project communities about the effects of trauma. HROC’s unique model brings together survivors and former perpetrators of the Rwandan genocide, using the experience of trauma and recovery as a place of common ground – both the grief and loss felt by genocide survivors, and the guilt and shame of the perpetrators, bystanders, and their families. This process of trauma healing is one path to bring communities into reconciliation.
            </p>
            <img
              src={Pic2}
              alt="Placeholder"
              className="w-full rounded-lg shadow-md"
            />
            <h4>Youth Leadership:
            </h4>
            <p>
            Since Rwanda has a median age of only 19, youth leadership builds the future. In each of our project’s communities, the Rwandan office of Aegis Trust selects and mentors Youth Champions, and they have emerged as a vibrant force. They have led more than 270 projects. They built homes and gardens for vulnerable people (photo below), led discussions about reconciliation, performed original skits and poetry about the genocide, and raised money on their own for additional service activities. Aegis Trust also taught these youth how to collect reconciliation stories, using photography and video production techniques and mobile phone technology. They created 18 short documentaries, and have been using these stories to promote acceptance and spark discussions in schools and communities.
            </p>
            <img
              src={Pic3}
              alt="Placeholder"
              className="w-full rounded-lg shadow-md"
            />
            <h4>Community Dialogues:
            </h4>
            <p>
            Within Rwandan communities, many disputes remain about the property theft and violence committed before and during the genocide. If these grievances are not resolved, they can contribute to larger conflicts. In our 16 project communities, the Rwandan organization, Institute of Research and Dialogue for Peace (IRDP), built dialogue clubs where survivors, perpetrators and bystanders have an ongoing space to resolve conflicts peacefully – sometimes with life-changing results. We also held intergenerational dialogues, and listening sessions with local and national government officials to support community members to advocate for their needs.
            </p>
            <img
              src={Pic4}
              alt="Placeholder"
              className="w-full rounded-lg shadow-md"
            />
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

export default PeacefulConnectionRwanda;
