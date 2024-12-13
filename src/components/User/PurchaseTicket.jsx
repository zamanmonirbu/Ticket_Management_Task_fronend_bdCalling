
// src/Components/PurchaseTicket.js
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { purchaseTicket } from '../../redux/Actions/UserAction';

const PurchaseTicket = () => {
  const [ticketId, setTicketId] = useState('');
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.purchaseTicket);

  const handleChange = (e) => {
    setTicketId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(purchaseTicket(ticketId));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Purchase Ticket</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Ticket ID:</label>
          <input
            type="text"
            name="ticketId"
            value={ticketId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button type="submit" className="gradient-button">Purchase Ticket</button>
      </form>
      {loading && <p>Loading...</p>}
      {success && <p className="text-green-500">Ticket purchased successfully!</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default PurchaseTicket;
