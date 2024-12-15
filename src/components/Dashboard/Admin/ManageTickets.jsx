import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets, updateTicket, deleteTicket } from '../../../redux/Actions/ticketActions';

const ManageTickets = () => {
  const dispatch = useDispatch();

  const { tickets = [],  } = useSelector((state) => state.ticket);

  console.log(tickets)

  const [editData, setEditData] = useState({}); // For handling ticket updates
  const [isEditing, setIsEditing] = useState(false); // To toggle between viewing and editing

  // Fetch tickets when the component mounts
  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  // Handle update form submission
  const handleUpdate = (id) => {
    dispatch(updateTicket(id, editData));
    setIsEditing(false); // Close the edit form after submitting
  };

  // Handle delete action
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      dispatch(deleteTicket(id));
    }
  };

  // Handle changes to the edit form
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  // Format the createdAt date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
  };

  // if (loading) return <div className="text-center text-lg">Loading tickets...</div>;

  // if (error) return <div className="text-center text-lg text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-6">Manage Tickets</h1>
      
      {/* Ticket Update Form (only shows when editing) */}
      {isEditing && (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-medium mb-4">Edit Ticket</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleUpdate(editData._id); }}>
            <div className="mb-4">
              <label htmlFor="seatNumber" className="block text-gray-700">Seat Number</label>
              <input
                id="seatNumber"
                type="text"
                name="seatNumber"
                value={editData.seatNumber || ''}
                onChange={handleEditChange}
                placeholder="Seat Number"
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="paymentStatus" className="block text-gray-700">Payment Status</label>
              <input
                id="paymentStatus"
                type="text"
                name="paymentStatus"
                value={editData.paymentStatus || ''}
                onChange={handleEditChange}
                placeholder="Payment Status"
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="total" className="block text-gray-700">Total</label>
              <input
                id="total"
                type="number"
                name="total"
                value={editData.total || ''}
                onChange={handleEditChange}
                placeholder="Total"
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Update Ticket
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Ticket List */}
      <ul className="space-y-4">
        {tickets.map((ticket) => (
          <li key={ticket._id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="mb-2">
              <strong className="text-gray-700">Seat Number:</strong> {ticket.seatNumber}
            </div>
            <div className="mb-2">
              <strong className="text-gray-700">Bus ID:</strong> {ticket.busId}
            </div>
            <div className="mb-2">
              <strong className="text-gray-700">Payment Status:</strong> {ticket.paymentStatus}
            </div>
            <div className="mb-4">
              <strong className="text-gray-700">Total:</strong> ${ticket.total}
            </div>
            <div className="mb-4">
              <strong className="text-gray-700">Booked At:</strong> {formatDate(ticket.createdAt)}
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => { setIsEditing(true); setEditData(ticket); }}
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(ticket._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageTickets;
