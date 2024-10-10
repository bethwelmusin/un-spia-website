import React, { useState, useEffect } from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';

const Countries = () => {
  const [countries, setCountries] = useState([]); // State to hold fetched countries
  const [loading, setLoading] = useState(true); // State to handle loader
  const [searchTerm, setSearchTerm] = useState('');

  // Function to fetch countries from API
  const fetchCountries = async () => {
    try {
      setLoading(true); // Set loading to true before fetching data
      const response = await fetch('https://api.un-spia.org/api/v1/constants/countries/');
      const data = await response.json();
      setCountries(data.countries); // Access the countries array within the response object
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching countries:', error);
      setLoading(false); // Set loading to false in case of error
    }
  };

  // Fetch countries on component mount
  useEffect(() => {
    fetchCountries();
  }, []);

  // Filter countries based on search term
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCountryClick = (newsUrl) => {
    window.open(newsUrl, '_blank'); // Open the news_url in a new tab
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Troops Contributing Countries</h1>

      <div className="flex items-center mb-4">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search for a country..."
          className="p-1 text-sm py-2 border rounded-lg w-80"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Loader while fetching data */}
      {loading ? (
        <div className="flex justify-center items-center">
          <FaSpinner className="animate-spin text-yellow-500 text-4xl" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-6">
          {filteredCountries.map((country) => (
            <div
              key={country.name}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleCountryClick(country.news_url)} // Open news_url when clicked
            >
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
      )}
    </div>
  );
};

export default Countries;
