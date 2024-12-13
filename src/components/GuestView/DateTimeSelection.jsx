const DateTimeSelection = ({ time, setTime }) => (
  <div className="flex space-x-4 items-center py-8 ">
    <div className="flex-1 w-full">
      <input
        type="time"
        className="w-full border border-gray-300 p-2 rounded"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
    </div>
  </div>
);

export default DateTimeSelection;
