import React, { useState } from 'react'; 
import { countries } from '../assets/data'; 

const Countries = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Trops Contributing Countries</h1>
      
      <input
        type="text"
        placeholder="Search for a country..."
        className="p-1 text-sm py-4 border rounded-lg mb-4 w-80" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
        />

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-6">
        {filteredCountries.map((country) => (
          <div key={country.name} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src={country.flag}
              alt={country.name}
              className="w-24 h-16 object-cover rounded-lg" 
            />
            <h3 className="mt-2 font-bold text-xl">{country.name}</h3>
            <p><strong>Region:</strong> {country.region}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countries;
