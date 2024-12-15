import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getBusById, updateBus } from '../../../redux/Actions/busActions';

const EditBus = () => {
  const { busId } = useParams(); // Get busId from URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bus } = useSelector(state => state.bus); // Get the single bus data from the store
  const [formData, setFormData] = useState({
    name: '',
    totalSeats: 0,
    schedules: []
  });

  console.log(bus)

  useEffect(() => {
    dispatch(getBusById(busId)); // Get the bus details when the component loads
  }, [dispatch, busId]);

  useEffect(() => {
    if (bus) {
      setFormData({
        name: bus.name || '',
        totalSeats: bus.totalSeats || 0,
        schedules: bus.schedules || []
      });
    }
  }, [bus]);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleScheduleChange = (index, field, value) => {
    const updatedSchedules = [...formData.schedules];
    updatedSchedules[index][field] = value;
    setFormData({ ...formData, schedules: updatedSchedules });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBus(busId, formData)); // Dispatch update action
    navigate('/admin/view-all-buses'); // Navigate back to the All Buses page
  };

  return (
    <div className="p-6 bg-gray-200 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Edit Bus</h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Bus Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full p-3 border border-gray-300 rounded-md" 
            placeholder="Enter bus name" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="totalSeats">Total Seats</label>
          <input 
            type="number" 
            name="totalSeats" 
            value={formData.totalSeats} 
            onChange={handleChange} 
            className="w-full p-3 border border-gray-300 rounded-md" 
            placeholder="Enter total seats" 
          />
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-4">Schedules</h3>
        {formData.schedules.map((schedule, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-100 rounded-md">
            <input 
              type="text" 
              value={schedule.from} 
              onChange={(e) => handleScheduleChange(index, 'from', e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded-md mb-2" 
              placeholder="From" 
            />
            <input 
              type="text" 
              value={schedule.to} 
              onChange={(e) => handleScheduleChange(index, 'to', e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded-md mb-2" 
              placeholder="To" 
            />
            <input 
              type="time" 
              value={schedule.departureTime} 
              onChange={(e) => handleScheduleChange(index, 'departureTime', e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded-md mb-2" 
              placeholder="Departure Time" 
            />
            <input 
              type="time" 
              value={schedule.arrivalTime} 
              onChange={(e) => handleScheduleChange(index, 'arrivalTime', e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded-md mb-2" 
              placeholder="Arrival Time" 
            />
          </div>
        ))}

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4">
          Update Bus
        </button>
      </form>
    </div>
  );
};

export default EditBus;
