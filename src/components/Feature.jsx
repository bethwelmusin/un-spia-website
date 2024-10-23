import { FaHandsHelping, FaLeaf, FaUsers } from "react-icons/fa";
import { GiBoltBomb } from 'react-icons/gi';
import { GiTreeBranch } from 'react-icons/gi';
import { FaHandPeace } from 'react-icons/fa';
import { GiSportMedal } from 'react-icons/gi';

const Feature = () => {
  const features = [
    {
      icon: <GiBoltBomb className="text-5xl text-yellow-500 mb-4" />,
      title: "UN-SPIA Mines",
      description:
        "Assistance to disarmament, to mine-clearing, to eliminate small arms, under ammunition, anti-personnel weapons and to pyrotechnic remediation.",
    },
    {
      icon: <GiTreeBranch className="text-5xl text-yellow-500 mb-4" />,
      title: "Environmental Program",
      description:
        "Implementation of a security management dynamic on the island of Sazani, Albania’s military base.Mr André Martinez-Humayou is the director of this program. He forms on the techniques of development and security of natural sites.",
    },
    {
      icon: <FaHandPeace className="text-5xl text-yellow-500 mb-4" />,
      title: "Academy Of Peace",
      description:
        "The Academy of the Peace proposes formations, theoretical and practical courses on the Peacekeeping, security and peace culture. It hosts humanitarian actors, former military, diplomats, and jurists. It aspires to be a practical and effective link on the field.",
    },
    {
      icon: <FaUsers className="text-5xl text-yellow-500 mb-4" />,
      title: "International Young Peacemakers Program",
      description:
        "In partnership with scholar establishments, this program relates to children interested in peace or wishing to do good around them by citizenship and peace actions. It lasts a year, but is renewable on 3 years.",
    },
    {
      icon: <GiSportMedal className="text-5xl text-yellow-500 mb-4" />,
      title: "Sport and health for the promotion of peace program",
      description:
        "Promote peace by the practice of sport. It allows to create a spirit of collaboration around a same ambition and to learn individual and collective values: courage, honor, respect and fairplay. Diplomas and medals are attributed to the students to congratulate them on their actions",
    },
    {
      icon: <FaUsers className="text-5xl text-yellow-500 mb-4" />,
      title: "UN-SPIA Humanitarian and development",
      description:
        "Act in favor of the disinherited populations - Act in the field of emergency and development - Contribute to humanitarian actions and peace.",
    },
    
  ];

  return (
    <section className="py-6 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Key Initiatives
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are committed to transforming lives through impactful
            initiatives.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-shadow  duration-300"
            >
              {feature.icon}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
