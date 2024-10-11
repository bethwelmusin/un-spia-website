import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa"; // Import the spinner icon
import Divider from "../Divider";

const EventCard = ({ event }) => {
  const localDateTime = new Date(event.created_at).toLocaleString();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 duration-300">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-yellow-500 mb-2">
          {event.title}
        </h3>
        <p className="text-gray-600 mb-1">
          <strong>Location:</strong> {event.location}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Date:</strong> {localDateTime}
        </p>
        <p className="text-gray-700 text-sm mb-4">{event.description}</p>
        <a
          href="#"
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-green-700"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

const Events = () => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true); // Set loading to true before fetching data
        const response = await fetch("https://api.un-spia.org/api/v1/updates/events/");
        const data = await response.json();
        setEventsData(data); // Store fetched events in state
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Upcoming Events
        </h2>
        <Divider />

        {loading ? ( // Show loader while loading
          <div className="flex justify-center items-center py-8">
            <FaSpinner className="animate-spin text-yellow-500 text-4xl" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
