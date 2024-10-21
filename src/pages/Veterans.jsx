import React from 'react';
const peacekeepersData = [
    {
      country: 'Belgium',
      link: 'https://www.belgian-bluehelmets-veterans.eu/',
      organization: 'FNCBOH - NVBHHO',
      head: 'Claude Cornil',
      email: 'claude.cornil@telenet.be',
    },
    {
      country: 'Belgium',
      link: 'www.aisp-spia-western-europe.eu',
      organization: 'Vice president AISP/SPIA',
      head: 'Tibor Albert',
      email: 'tibor.albert.aisp@gmail.com',
    },
    {
      country: 'Bresil',
      link: 'www.batalhaosuez.com.br',
      organization: 'Associação do Batalhão Suez',
      head: '????',
      email: 'contato@batalhaosez.com.br',
    },
    {
      country: 'Austria',
      link: 'https://www.peacekeeper.at/',
      organization: 'Vereinigung Österreichischer Peacekeeper',
      head: 'Mr Hans Zimmermann',
      email: 'gensekr(at)peacekeeper.at',
    },
    {
      country: 'Australia',
      link: 'www.peacekeepers.asn.au/',
      organization: 'Allan Thomas JP',
      head: 'NaN',
      email: 'president@peacekeepers.asn.au',
    },
    {
      country: 'Benin',
      link: 'https://www.spia-ong.org',
      organization: 'ONG SPIA-Benin',
      head: 'Mr Henri Tokoudagba',
      email: 'sda_benin@hotmail.com',
    },
    {
      country: 'Bosnia and Herzegovina',
      link: 'https://www.sua-pfbih.ba/',
      organization: 'Peacekeepers Association in Bosnia and Herzegovina',
      head: 'Mr. Sabir Duraković',
      email: 'udruzenjesmfbih@yahoo.com',
    },
    {
      country: 'Canada',
      link: 'http://www.cavunpc.org/',
      organization: 'Canadian Association of Veterans in United Nations Peacekeeping',
      head: 'Don Martin',
      email: 'don_martin@icloud.com',
    },
    {
      country: 'China',
      link: 'http://www.mfa.gov.cn/eng',
      organization: 'Ministry of Foreign Affairs',
      head: 'Mr Geng Shuang',
      email: 'chinaunmission@fmprc.gov.cn',
    },
    {
      country: 'Colombia',
      link: 'http://www.spia-colombia.org',
      organization: 'Association of Soldiers of Peace - Colombia',
      head: 'NaN',
      email: 'info@spia-colombia.org',
    },
    {
      country: 'Côte d\'Ivoire',
      link: 'www.fnspi-ci.org',
      organization: 'Fédération Nationale des Soldats de Paix International',
      head: 'Col. Djedje Dagbale Desire',
      email: 'contact@fnspi-ci.org',
    },
    {
      country: 'Croatia',
      link: 'https://www.hkvd.hr',
      organization: 'Croatian Peacekeepers Veterans Association',
      head: 'Mr. Vladimir Cvitanovic',
      email: 'vladimir.cvitanovic@hotmail.com',
    },
    {
      country: 'Denmark',
      link: 'http://www.peacekeepers.dk',
      organization: 'The Blue Helmets - Denmark',
      head: 'Peter Olivarius Nielsen',
      email: 'formand@peacekeepers.dk',
    },
    {
      country: 'Estonia',
      link: 'www.peacekeepers.ee',
      organization: 'Estonian United Nations Peacekeepers Association',
      head: 'NaN',
      email: 'veteranidliit@gmail.com',
    },
    {
      country: 'Finland',
      link: 'www.suomenrauhanturvaajaliitto.fi',
      organization: 'The Finnish Peacekeepers Association',
      head: 'NaN',
      email: 'toimisto@rauhanturvaajaliitto.fi',
    },
    {
      country: 'France',
      link: 'https://www.france-veterans.org',
      organization: 'Federation Nationale des Anciens Casques Bleus Francais',
      head: 'Mr Gerard Lancombe',
      email: 'veterans@france-veterans.org',
    },
    {
      country: 'Germany',
      link: 'https://www.dv-bundesverband.de/',
      organization: 'Deutsche Veteranen Verein (DV)',
      head: 'Axel Fick',
      email: 'info@dv-bundesverband.de',
    },
    {
      country: 'Greece',
      link: 'https://www.helnwv.org',
      organization: 'Hellenic Veterans of UN Peacekeeping Missions',
      head: 'Mr. Thanos Adamopoulos',
      email: 'info@helnwv.org',
    },
    {
      country: 'Hungary',
      link: 'https://www.huvat.hu',
      organization: 'Hungarian Veterans Association',
      head: 'NaN',
      email: 'huvat@hugat.hu',
    },
    {
      country: 'India',
      link: 'www.indianveteranspeacekeepers.com',
      organization: 'Indian Veterans Peacekeepers Association',
      head: 'Col. Ashok Rana',
      email: 'indianpeacekeepers@ivpa.in',
    },
    {
      country: 'Italy',
      link: 'https://www.associazioneitalianapeacekeeper.it',
      organization: 'Associazione Italiana Peacekeeper',
      head: 'Mr. Paolo Briganti',
      email: 'presidenza@italianapeacekeeper.it',
    },
    {
      country: 'Japan',
      link: 'https://www.japanpeacekeepers.org',
      organization: 'Japan Peacekeepers Veterans Association',
      head: 'Mr. Hideki Sato',
      email: 'jpva@japanpeacekeepers.org',
    },
    {
      country: 'Kenya',
      link: 'https://www.knav.org',
      organization: 'Kenya National Association of Veterans',
      head: 'Major General Ali',
      email: 'info@knav.org',
    },
    {
      country: 'Lebanon',
      link: 'https://www.lbvpe.org',
      organization: 'Lebanese Blue Veterans Peacekeepers Association',
      head: 'Mr. Hadi Al Kalani',
      email: 'lbvpe@lebanonbluepeace.org',
    },
    {
      country: 'Nepal',
      link: 'https://www.npn.org',
      organization: 'Nepal Peacekeeping Veterans Association',
      head: 'Mr. Rajendra Thapa',
      email: 'info@npv.org.np',
    },
    {
      country: 'Pakistan',
      link: 'https://www.pakistanveterans.org',
      organization: 'Pakistan Veterans Peacekeepers Association',
      head: 'Col. Abdul Rauf',
      email: 'secretary@pvpa.org.pk',
    },
    {
      country: 'Philippines',
      link: 'www.peacekeepers.ph',
      organization: 'Philippine United Nations Veterans Association',
      head: 'Mr. Jose Castillo',
      email: 'peacekeepers@philippines.org',
    },
    {
      country: 'Portugal',
      link: 'https://www.veteranosdeportugal.pt',
      organization: 'Portugal Veterans Peacekeepers Association',
      head: 'Mr. Joao Rodrigues',
      email: 'info@veteranosdeportugal.pt',
    },
    {
      country: 'Serbia',
      link: 'www.veteraniserbia.org.rs',
      organization: 'Serbian Veterans Peacekeepers Association',
      head: 'Mr. Branko Lukovic',
      email: 'info@veteraniserbia.rs',
    },
    {
      country: 'South Korea',
      link: 'https://www.southkoreapeacekeepers.org',
      organization: 'South Korean Veterans Peacekeepers Association',
      head: 'Mr. Park Hyun Soo',
      email: 'info@skvpa.org',
    },
    {
      country: 'Sweden',
      link: 'www.sverigespeacekeepers.se',
      organization: 'Swedish Veterans Peacekeepers Association',
      head: 'Mr. Lennart Svensson',
      email: 'info@svpa.se',
    },
  ];
  

const Veterans = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Peacekeepers Organizations</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {peacekeepersData.map((peacekeeper, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2 text-yellow-600">{peacekeeper.country}</h2>
            <p className="mb-2">
              <span className="font-semibold">Organization: </span>
              {peacekeeper.organization}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Head of Organization: </span>
              {peacekeeper.head}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email: </span>
              <a href={`mailto:${peacekeeper.email}`} className="text-blue-500">
                {peacekeeper.email}
              </a>
            </p>
            <p className="mb-2">
              <span className="font-semibold">Website: </span>
              <a href={peacekeeper.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                {peacekeeper.link}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Veterans;
