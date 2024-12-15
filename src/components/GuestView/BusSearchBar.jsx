import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CitySelection from "./CitySelection";
import DateTimeSelection from "./DateTimeSelection";
import SearchButton from "./SearchButton";
import SearchResults from "./SearchResults";
import BusDetails from "./BusDetails";
import BusSeatBooking from "./BusSeatBooking";
import { cities } from "../Dashboard/Data/cityData";
import { searchBuses } from "../../redux/Actions/busActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../utils/Loader";

const BusSearchBar = () => {
  const dispatch = useDispatch();
  const [selectedBus, setSelectedBus] = useState(null);

  // Destructure the necessary state from Redux
  const { from, to, time, searchResultsView = [], loading } = useSelector(
    (state) => state.bus
  );

  // Local state for 'from', 'to', and 'time'
  const [fromCity, setFromCity] = useState(from);
  const [toCity, setToCity] = useState(to);
  const [timeInput, setTimeInput] = useState(time);

  // Flag to track if the search has been initiated
  const [hasSearched, setHasSearched] = useState(false);

  // Handle search button click
  const handleSearch = () => {
    // Dispatch the search action with the selected fields
    dispatch(searchBuses({ from: fromCity, to: toCity, time: timeInput }));
    setHasSearched(true); // Mark that the search was triggered
  };

  const handleCityClick = (city) => {
    setSelectedBus(city);
  };

  useEffect(() => {
    // Only show toast if the search has been initiated and results are fetched
    if (hasSearched && searchResultsView.length === 0) {
      // Removed toast.error
    }
  }, [searchResultsView, hasSearched]);  // Trigger when searchResultsView or hasSearched changes

  return (
    <div>
      <motion.div
        className="bg-white rounded-lg max-w-5xl mx-auto  mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Flex container to arrange components in a row */}
        <div className="flex space-x-12 items-center justify-center py-8 px-8">
          {/* City Selection */}
          <CitySelection
            cities={cities}
            from={fromCity}
            setFrom={setFromCity}
            to={toCity}
            setTo={setToCity}
          />

          {/* Date and Time Selection */}
          <DateTimeSelection time={timeInput} setTime={setTimeInput} />

          {/* Search Button */}
          <SearchButton handleSearch={handleSearch} />
        </div>

        {/* Show the loader when loading is true */}
        {loading && <Loader />}

        {/* Search Results */}
        {searchResultsView.length > 0 && !loading && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SearchResults
              searchResults={searchResultsView}
              handleCityClick={handleCityClick}
            />
          </motion.div>
        )}
      </motion.div>

      {/* Bus Details */}
      {selectedBus && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BusDetails selectedBus={selectedBus} />
        </motion.div>
      )}

      {/* Pass bus details to BusSeatBooking component */}
      {selectedBus && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BusSeatBooking busDetails={selectedBus} />
        </motion.div>
      )}
    </div>
  );
};

export default BusSearchBar;
