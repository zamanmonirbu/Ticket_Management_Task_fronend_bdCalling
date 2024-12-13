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

export default CitySelection;
