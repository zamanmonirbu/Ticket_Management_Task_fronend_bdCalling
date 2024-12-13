import PropTypes from "prop-types";

const SearchResults = ({ searchResults, handleCityClick }) => {
  return (
    <div className="mt-6 bg-gray-200 p-4 rounded-xl">
      <h3 className="font-semibold text-xl mb-4">Available Buses:</h3>
      <div className="space-x-4 space-y-4">
        {searchResults.map((city, index) => (
          <button
            key={index}
            className="gradient-button text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            onClick={() => handleCityClick(city)}
          >
            {city.name}
          </button>
        ))}
      </div>
    </div>
  );
}
  
  

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of city names (strings)
  handleCityClick: PropTypes.func.isRequired, // Function that handles city click
};

export default SearchResults;
