// src/Components/UpdateBus.js
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateBus } from '../../../redux/Actions/busActions';

const UpdateBus = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const bus = useSelector((state) => state.bus.buses.find(bus => bus._id === id));
  const [busData, setBusData] = useState({ name: bus?.name || '', route: bus?.route || '', totalSeats: bus?.totalSeats || 0 });

  useEffect(() => {
    if (bus) {
      setBusData({ name: bus.name, route: bus.route, totalSeats: bus.totalSeats });
    }
  }, [bus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBusData({ ...busData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBus(id, busData));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Update Bus</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Bus Name:</label>
          <input
            type="text"
            name="name"
            value={busData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">Route:</label>
          <input
            type="text"
            name="route"
            value={busData.route}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">Total Seats:</label>
          <input
            type="number"
            name="totalSeats"
            value={busData.totalSeats}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button type="submit" className="gradient-button">Update Bus</button>
      </form>
    </div>
  );
};

export default UpdateBus;