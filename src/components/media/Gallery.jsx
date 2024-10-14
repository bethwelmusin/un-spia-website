import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

const Gallery = () => {
  const [images, setImages] = useState([]); // State to store fetched images
  const [loading, setLoading] = useState(true); // State to handle loading spinner

  // Function to fetch images from API
  const fetchImages = async () => {
    try {
      setLoading(true); // Set loading to true before fetching data
      const response = await fetch('https://api.un-spia.org/api/v1/constants/gallery/'); // Adjust endpoint URL if needed
      const data = await response.json();
      setImages(data); // Store fetched images in state
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching images:', error);
      setLoading(false); // Set loading to false in case of error
    }
  };

  // Fetch images on component mount
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="px-2">
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-yellow-500 dark:focus:ring-blue-800"
        >
          All Pictures
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <FaSpinner className="animate-spin text-yellow-500 text-4xl" />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {images.map((image) => (
            <div key={image.id}>
              <img
                // className="h-auto max-w-full rounded-lg"
                className="w-full h-48 object-cover rounded-lg md:h-60 lg:h-72"
                src={image.image}
                alt={image.title}
              />
              <h3 className="text-sm text-center font-sm">{image.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
