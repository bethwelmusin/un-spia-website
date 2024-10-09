import Image from "../assets/un-logo.jpg";
import { HiLightBulb } from 'react-icons/hi';
import { GiArcher } from 'react-icons/gi';
import Light from "../assets/light.svg";
import Mission from "../assets/archery.svg"

const History = () => {
  return (
    <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-gray-100 py-8 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <div className="flex justify-center">
        <img src={Image} alt="Flags and Building" className="w-full h-auto object-cover shadow-lg rounded-md" />
      </div>
  
      <div>
      <div className="bg-white p-6 shadow-lg rounded-md border-b-4 border-yellow-500">
  <span className="inline-block px-3 py-1 bg-yellow-500 text-white-800 text-sm font-medium rounded-full">About Us</span>
  <h2 className="mt-4 text-2xl font-bold text-yellow-500">Learn About Us</h2>
  <p className="mt-4 text-gray-700 leading-relaxed">
    The Charter of the United Nations declares its primary goal "to save succeeding generations from the scourge of war," as well as "to practice tolerance and live together in peace with one another." The message by António Guterres "In a world mired by conflict, inequalities and discrimination, we must strive ever harder to promote dialogue, empathy and human rights for all." articulates these aspirations from the heart.
  </p>
  <p className="mt-4 text-gray-700 leading-relaxed">
    UN-SPIA Is a United Nations Blue Helmets International Affairs Organisation founded on 19th November 1998 and provided with General Consultative Status from the Resolution No. 12-96 (XLIV) adopted by attribution Committee of the United Nations Economic and Social Council on 3rd July 1995. The East, South, and Central Africa liaison office is situated at Eaton Place, 2nd floor on United Nations Crescent, Off United Nations Avenue, Gigiri, Nairobi, Kenya.
  </p>
  <p className="mt-4 text-gray-700 leading-relaxed">
    UN-SPIA works to foster a strong, effective relationship between the United Nations and the Member States to promote core interests in UN Peacekeeping Operations and build a more secure, prosperous, and healthy world. UN-SPIA engages policymakers, the media, and the general public alike to increase awareness of the critical role played by the UN Peacekeepers globally and the importance of constructive UN Member State relations on funding of the Peacekeeping Operations and exploring well-being of uniformed UN personnel in Peacekeeping Operations thus sustaining peace with healthy minds.
  </p>
</div>

  
<div className="bg-white mt-2 p-6 shadow-lg rounded-md border-b-4 border-yellow-500">
<h3 className="text-xl font-bold text-gray-800">
            The International Day of UN Peacekeepers 2024
          </h3>
          <h4 className="mt-2 text-lg text-gray-700 font-semibold">
            Fit for the future, building better together
          </h4>
          <p className="mt-4 text-gray-700 leading-relaxed">
          For 76 years, United Nations peacekeepers have worked to save and change lives in the world’s most fragile political and security situations. Since 1948, more than two million uniformed and civilian personnel have helped countries to transition from war to peace. Today, more than 70,000 peacekeepers serve in 11 missions deployed in hotspots around the world.          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
          Observed under the theme “Fit for the future, building better together,” this year’s International Day looks at the invaluable contributions military, police and civilian peacekeepers have made over the last seven decades. It encapsulates the spirit of progress and collective action towards creating a more equal, just and sustainable world.          
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
          Over the years, peacekeeping has evolved to adapt to the changing political landscape and nature of conflicts which have become more complex and interconnected. With support from UN member countries, it continues to advance the path set forth in the UN Secretary-General’s New Agenda for Peace which calls for a more robust, holistic and collective response to the security threats of today and tomorrow.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
            Despite the challenges, peacekeepers persevere, alongside many partners, in the collective pursuit of peace. The International Day pays tribute to the service and sacrifice of peacekeepers and the resilience of the communities that they serve. It honours the more than 4,000 peacekeepers who have lost their lives serving for peace. This campaign also calls on each of us to join the global movement for peace. Alone, we can never succeed. But, together, we can be a strong force for change.
            </p>

        </div>
  
      </div>
    </div>
  </div>
  

            <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                        <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src={Mission} className="h-10 w-10" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-yellow-500">Mission</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                        Maintaining peace: coordinate and carry out actions for peace, train future Blue Helmets, manage of sites and form former military - Be a proposition force for the United Nations - Social and humanitarian actions: help and support harmed Blue Helmets, their widows and their orphans - Serve the principles of the United Nations Charter - Gather more than 1 million Blue Helmets who have participated in the peacekeeping operations (PO) since 1948 by creating associations - Conflict resolutions
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src={Light} className=" h-10 w-10" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-yellow-500"> Vision
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500"> 
                        Helping to avert the collapse of fragile states, prevent civil wars from metastasizing into full-blown regional conflicts, and decrease the likelihood that dormant conflicts will flare up again.
                        </dd>
                    </div>
        
                </dl>
            </div>

        </div>
    </div>
  );
};

export default History;
