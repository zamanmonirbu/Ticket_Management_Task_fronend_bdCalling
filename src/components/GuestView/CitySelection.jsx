import PropTypes from 'prop-types';

const CitySelection = ({ cities, from, setFrom, to, setTo }) => (
  <div className="flex space-x-4 items-center py-8 w-full">
    <div className="flex-1 w-full">
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
    <div className="flex-1 w-full">
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
  </div>
);

CitySelection.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired, // Must be an array of strings
  from: PropTypes.string.isRequired, // Must be a string
  setFrom: PropTypes.func.isRequired, // Must be a function
  to: PropTypes.string.isRequired, // Must be a string
  setTo: PropTypes.func.isRequired, // Must be a function
};

export default CitySelection;
