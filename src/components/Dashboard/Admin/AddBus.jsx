import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBus } from '../../../redux/Actions/busActions';
import { cities } from '../Data/cityData';


const AddBus = () => {
  const [busData, setBusData] = useState({
    name: '',
    totalSeats: 0,
    schedules: [{ from: '', to: '', departureTime: '', arrivalTime: '' }] // Update schedule format
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBusData({
      ...busData,
      [name]: value,
    });
  };

  const handleScheduleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSchedules = [...busData.schedules];
    updatedSchedules[index][name] = value;
    setBusData({
      ...busData,
      schedules: updatedSchedules,
    });
  };

  const addScheduleField = () => {
    setBusData({
      ...busData,
      schedules: [...busData.schedules, { from: '', to: '', departureTime: '', arrivalTime: '' }]
    });
  };

  const removeScheduleField = (index) => {
    const updatedSchedules = [...busData.schedules];
    updatedSchedules.splice(index, 1);
    setBusData({
      ...busData,
      schedules: updatedSchedules,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(busData);
    dispatch(addBus(busData)); // Send busData with updated schedules
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-4xl min-w-xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Add Bus</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Bus Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bus Name</label>
            <input
              type="text"
              name="name"
              value={busData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter bus name"
            />
          </div>

          {/* Total Seats */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Total Seats</label>
            <input
              type="number"
              name="totalSeats"
              value={busData.totalSeats}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter total seats"
            />
          </div>

          {/* Schedules Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Schedules</label>
            {busData.schedules.map((scheduleData, index) => (
              <div key={index} className="flex items-center space-x-4 mb-4">
                
                {/* From Dropdown */}
                <select
                  name="from"
                  value={scheduleData.from}
                  onChange={(e) => handleScheduleChange(index, e)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select From City</option>
                  {cities.map((city, i) => (
                    <option key={i} value={city}>{city}</option>
                  ))}
                </select>
                
                {/* Departure Time */}
                <input
                  type="time"
                  name="departureTime"
                  value={scheduleData.departureTime}
                  onChange={(e) => handleScheduleChange(index, e)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />

                {/* To Dropdown */}
                <select
                  name="to"
                  value={scheduleData.to}
                  onChange={(e) => handleScheduleChange(index, e)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select To City</option>
                  {cities.map((city, i) => (
                    <option key={i} value={city}>{city}</option>
                  ))}
                </select>

                {/* Arrival Time */}
                <input
                  type="time"
                  name="arrivalTime"
                  value={scheduleData.arrivalTime}
                  onChange={(e) => handleScheduleChange(index, e)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />

                {/* Remove Schedule Button */}
                {busData.schedules.length > 1 && (
                  <button 
                    type="button" 
                    onClick={() => removeScheduleField(index)} 
                    className="text-red-500 font-bold"
                  >
                    &times;
                  </button>
                )}
              </div>
            ))}

            {/* Add More Schedule Button */}
            <button 
              type="button" 
              onClick={addScheduleField} 
              className="w-full mt-2 flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-600 hover:bg-gray-100"
            >
              + Add Another Schedule
            </button>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full gradient-button-main"
          >
            Add Bus
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBus;
