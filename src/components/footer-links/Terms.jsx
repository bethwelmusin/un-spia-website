

import React from 'react';

const Terms = () => {
  return (
    <div>
    <div className="container mx-auto p-6">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
     {/* Main Content Card */}
     <div className="col-span-2 bg-white shadow-md rounded-lg p-6">
       <h2 className="text-2xl font-bold mb-4">Terms Of Use Of UN-SPIA</h2>
       <div className="space-y-4">

       <div class="space-y-4 p-6">
  <p class="font-bold">The use of this web site constitutes agreement with the following terms and conditions:</p>

  <div>
    <p>(a) The UN Soldiers for Peace International Association maintains this web site (the “Site”) as a courtesy to those who may choose to access the Site (“Users”). The information presented herein is for informative purposes only. The UN Soldiers for Peace International Association grants permission to Users to visit the Site and to download and copy the information, documents, and materials (collectively, “Materials”) from the Site for the User’s personal, non-commercial use, without any right to resell or redistribute them or to compile or create derivative works therefrom, subject to the terms and conditions outlined below, and also subject to more specific restrictions that may apply to specific Material within this Site.</p>
  </div>

  <div>
    <p>(b) The UN Soldiers for Peace International Association administers this Site. All Material on this Site from the United Nations appears subject to the present Terms and Conditions.</p>
  </div>

  <div>
    <p>(c) Unless expressly stated otherwise, the findings, interpretations, and conclusions expressed in the Materials on this Site are those of the various Soldiers for Peace International Association staff members, consultants, and advisers to the UN Soldiers for Peace International Association Secretariat who prepared the work and do not necessarily represent the views of the UN Soldiers for Peace International Association or its Member States.</p>
  </div>

  <p class="font-bold">Disclaimers:</p>

  <div>
    <p>Materials provided on this Site are provided “as is,” without warranty of any kind, either express or implied, including, without limitation, warranties of merchantability, fitness for a particular purpose, and non-infringement. The UN Soldiers for Peace International Association specifically does not make any warranties or representations as to the accuracy or completeness of any such Materials.</p>
  </div>

  <div>
    <p>The UN Soldiers for Peace International Association periodically adds, changes, improves, or updates the Materials on this Site without notice. Under no circumstances shall the Soldiers for Peace International Association be liable for any loss, damage, liability, or expense incurred or suffered that is claimed to have resulted from the use of this Site, including, without limitation, any fault, error, omission, interruption, or delay with respect thereto.</p>
  </div>

  <div>
    <p>The use of this Site is at the User’s sole risk. Under no circumstances, including but not limited to negligence, shall the UN Soldiers for Peace International Association or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages, even if the UN Soldiers for Peace International Association has been advised of the possibility of such damages.</p>
  </div>

  <div>
    <p>The User specifically acknowledges and agrees that the UN Soldiers for Peace International Association is not liable for any conduct of any User. This site may contain advice, opinions, and statements of various information providers. The UN Soldiers for Peace International Association does not represent or endorse the accuracy or reliability of any advice, opinion, statement, or other information provided by any information provider, any User of this Site, or any other person or entity. Reliance upon any such advice, opinion, statement, or other information shall also be at the User’s own risk.</p>
  </div>

  <p class="font-bold">Conditions of Use:</p>

  <div>
    <p>As a condition of use of this Site, the User agrees to indemnify the Soldiers for Peace International Association and its affiliates from and against any and all actions, claims, losses, damages, liabilities, and expenses (including reasonable attorneys’ fees) arising out of the User’s use of this Site.</p>
  </div>

  <p class="font-bold">All of this allows our peacekeepers to:</p>

  <ul class="list-disc list-inside space-y-2">
    <li>Protect civilians</li>
    <li>Prevent conflicts</li>
    <li>Build Rule of Law and security institutions</li>
    <li>Promote human rights</li>
    <li>Empower women</li>
    <li>Deliver field support</li>
  </ul>
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

export default Terms;
