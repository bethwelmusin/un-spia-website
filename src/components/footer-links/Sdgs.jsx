

import React from 'react';

const Sdgs = () => {
  return (
    <div>
    <div className="container mx-auto p-6">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
     {/* Main Content Card */}
     <div className="col-span-2 bg-white shadow-md rounded-lg p-6">
       <h2 className="text-2xl font-bold mb-4">Sustainable Development Goals</h2>
       <div className="space-y-4">
    
          <p>
          What are the Sustainable Development Goals?
          </p>
    
          <img
           src={Pic}
           alt="Placeholder"
           className="w-full rounded-lg shadow-md"
         />
    
         <p>The Sustainable Development Goals (SDGs), also known as the Global Goals, were adopted by the United Nations in 2015 as a universal call to action to end poverty, protect the planet, and ensure that by 2030 all people enjoy peace and prosperity.
    
            he 17 SDGs are integrated—they recognize that action in one area will affect outcomes in others, and that development must balance social, economic and environmental sustainability.
            </p>
    
          <p>
          Countries have committed to prioritize progress for those who're furthest behind. The SDGs are designed to end poverty, hunger, AIDS, and discrimination against women and girls.
    
         The creativity, knowhow, technology and financial resources from all of society is necessary to achieve the SDGs in every context.
          </p>
          <p>
          With more natural resource provisions in peace agreements today, it is also clear that there is a need for the international community and peacekeeping operations in particular to build new capacities and partnerships to be able to support the implementation of these provisions. The report concludes that addressing the risks and opportunities presented by natural resources is often critical to the success of UN peacekeeping efforts and can no longer be seen as distinct from the maintenance of peace and security. At the same time, the report also highlights the positive efforts that have been undertaken to reduce the environmental impacts of UN peacekeeping operations. By adopting creative and transformational practices, technologies and behaviours, peacekeeping missions can curtail energy and water use and waste production, and also generate significant financial savings. The improved health, safety and security of local communities and personnel, self-sufficiency of camps and reduced potential for disputes with local communities are further benefits. The two parts of the report are inherently connected showcasing better environmental practices and minimizing the impacts of peacekeeping operations are necessary prerequisites and form a foundation for engagement and building confidence at the community level.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <div>No poverty</div>
      <div>Zero hunger</div>
      <div>Good health and wellbeing</div>
      <div>Quality education</div>
      <div>Gender equality</div>
      <div>Clean water and sanitation</div>
      <div>Affordable and clean energy</div>
      <div>Decent work and economic growth</div>
      <div>Industry, innovation, and infrastructure</div>
      <div>Reduced inequalities</div>
      <div>Sustainable cities and communities</div>
      <div>Responsible consumption and production</div>
      <div>Climate action</div>
      <div>Life below water</div>
      <div>Life on land</div>
      <div>Peace, justice, and strong institutions</div>
      <div>Partnerships for goals</div>
    </div>
    
    
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

export default Sdgs;
