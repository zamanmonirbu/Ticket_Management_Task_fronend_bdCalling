
// src/Components/UpdateTicket.js
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateTicket } from '../../../redux/Actions/ticketActions';

const UpdateTicket = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const ticket = useSelector((state) => state.ticket.tickets.find(ticket => ticket._id === id));
  const [ticketData, setTicketData] = useState({ busId: ticket?.busId || '', price: ticket?.price || '', timeSlot: ticket?.timeSlot || '' });

  useEffect(() => {
    if (ticket) {
      setTicketData({ busId: ticket.busId, price: ticket.price, timeSlot: ticket.timeSlot });
    }
  }, [ticket]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketData({ ...ticketData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTicket(id, ticketData));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Update Ticket</h2>
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
        <button type="submit" className="gradient-button">Update Ticket</button>
      </form>
    </div>
  );
};

export default UpdateTicket;
