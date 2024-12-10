import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify"; // Importing toast
import BusSeatBooking from "./BusSeatBooking"; // Importing BusSeatBooking component

const BusSearchBar = () => {
  const [cities, setCities] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);

  // Simulated bus details for each city
  const busDetails = {
    "New York": {
      busName: "City Bus Express",
      departureTime: "10:00 AM",
      availableSeats: 50,
      price: "$30",
    },
    "Los Angeles": {
      busName: "LA City Shuttle",
      departureTime: "11:30 AM",
      availableSeats: 40,
      price: "$35",
    },
    "Chicago": {
      busName: "Windy City Bus",
      departureTime: "9:00 AM",
      availableSeats: 60,
      price: "$28",
    },
    // Add other city details here...
  };

  // Fetching cities when the component mounts
  useEffect(() => {
    const fetchCities = async () => {
      try {
        // Simulating fetching data from an API (replace with a real API call)
        const fetchedCities = [
          "New York",
          "Los Angeles",
          "Chicago",
          "Houston",
          "Phoenix",
          "Philadelphia",
          "San Antonio",
          "San Diego",
          "Dallas",
          "Austin",
        ];
        setCities(fetchedCities);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCities();
  }, []);

  const handleSearch = () => {
    // Check for missing fields and show a toast message
    let missingFields = [];

    if (!from) missingFields.push("From");
    if (!to) missingFields.push("To");
    if (!date) missingFields.push("Date");
    if (!time) missingFields.push("Time");

    if (missingFields.length > 0) {
      // Show toast with missing fields
      toast.error(`Please fill in the following fields: ${missingFields.join(", ")}`);
    } else {
      // If all fields are filled, set the search results (simulated here)
      console.log("Searching with the following details:");
      console.log({ from, to, date, time });

      // Simulate search result by showing cities available for the journey
      setSearchResults(cities);
    }
  };

  const handleCityClick = (city) => {
    // Display bus details when a city is clicked
    setSelectedBus(busDetails[city]);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-[80%] mx-auto my-12 ">
      {/* Input Fields and Button in a single row */}
      <div className="flex space-x-4 items-center  py-8">
        <div className="flex-1">
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">From</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">To</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <input
            type="date"
            className="w-full border border-gray-300 p-2 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="flex-1">
          <input
            type="time"
            className="w-full border border-gray-300 p-2 rounded"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        {/* Search Button */}
        <button
          className="gradient-button flex items-center justify-center py-2 px-4 rounded text-white font-bold"
          onClick={handleSearch}
        >
          <FaSearch className="mr-2" /> Search
        </button>
      </div>

      {/* Toast Container for displaying the toast */}
      <ToastContainer />

      {/* Search Results - Display cities as horizontal buttons */}
      {searchResults.length > 0 && (
        <div className="mt-6 bg-gray-200 p-4 rounded-xl">
          <h3 className="font-semibold text-xl mb-4">Available Buses:</h3>
          <div className="flex space-x-4 overflow-x-auto">
            {searchResults.map((city, index) => (
              <button
                key={index}
                className="gradient-button text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                onClick={() => handleCityClick(city)} // Click handler for city
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Show Bus Details when a city is clicked */}
      {selectedBus && (
        <div className="mt-6 bg-gray-100 p-4 rounded-xl">
          <h3 className="font-semibold text-xl mb-4">Bus Details:</h3>
          <p><strong>Bus Name:</strong> {selectedBus.busName}</p>
          <p><strong>Departure Time:</strong> {selectedBus.departureTime}</p>
          <p><strong>Available Seats:</strong> {selectedBus.availableSeats}</p>
          <p><strong>Price:</strong> {selectedBus.price}</p>
        </div>
      )}

      {/* Pass bus details to BusSeatBooking component */}
      {selectedBus && <BusSeatBooking busDetails={selectedBus} />}
    </div>
  );
};

export default BusSearchBar;
