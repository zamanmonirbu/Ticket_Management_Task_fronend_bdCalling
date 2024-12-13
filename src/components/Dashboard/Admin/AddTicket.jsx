
// src/Components/AddTicket.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTicket } from '../../../redux/Actions/ticketActions';

const AddTicket = () => {
  const [ticketData, setTicketData] = useState({
    busId: '',
    price: '',
    timeSlot: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketData({
      ...ticketData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTicket(ticketData));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Ticket</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Bus ID:</label>
          <input
            type="text"
            name="busId"
            value={ticketData.busId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">Price:</label>
          <input
            type="number"
            name="price"
            value={ticketData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">Time Slot:</label>
          <input
            type="text"
            name="timeSlot"
            value={ticketData.timeSlot}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button type="submit" className="gradient-button">Add Ticket</button>
      </form>
    </div>
  );
};

export default AddTicket;