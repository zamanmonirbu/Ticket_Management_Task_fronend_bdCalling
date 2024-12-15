import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTicketById } from '../../../redux/Actions/ticketActions';

const UserTickets = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const userId = user?.id;

  // Get tickets from the Redux store
  const { ticket } = useSelector((state) => state.ticket);
  
  // Fetch tickets when the component mounts
  useEffect(() => {
    if (userId) {
      dispatch(getTicketById(userId));
    }
  }, [dispatch, userId]);

//   if (loading) return <p className="text-center text-blue-500 font-semibold">Loading...</p>;
//   if (error) return <p className="text-center text-red-500 font-semibold">Error: {error}</p>;

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">User Tickets</h1>

      {!ticket ? (
        <p className="text-center text-gray-600 font-medium">No tickets found for this user.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Bus Details</h3>
            <p className="text-gray-700 mb-2"><span className="font-bold">Bus Name:</span> {ticket.busId?.name}</p>
            <p className="text-gray-700 mb-2"><span className="font-bold">Total Seats:</span> {ticket.busId?.totalSeats}</p>
            <h4 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Schedules</h4>
            <ul className="space-y-4">
              {ticket.busId?.schedules.map((schedule) => (
                <li key={schedule._id} className="bg-gray-100 p-4 rounded-md">
                  <p className="text-gray-800"><span className="font-bold">From:</span> {schedule.from} <span className="font-bold">To:</span> {schedule.to}</p>
                  <p className="text-gray-800"><span className="font-bold">Departure:</span> {schedule.departureTime} <span className="font-bold">Arrival:</span> {schedule.arrivalTime}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ticket Details</h3>
            <p className="text-gray-700 mb-2"><span className="font-bold">Seat Number:</span> {ticket.seatNumber}</p>
            <p className="text-gray-700 mb-2"><span className="font-bold">Payment Status:</span> <span className={`font-bold ${ticket.paymentStatus === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>{ticket.paymentStatus}</span></p>
            <p className="text-gray-700 mb-2"><span className="font-bold">Total:</span> ${ticket.total}</p>
            <p className="text-gray-700 mb-2"><span className="font-bold">Mobile:</span> {ticket.mobile}</p>
            <p className="text-gray-700 mb-2"><span className="font-bold">Booking Date:</span> {new Date(ticket.createdAt).toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTickets;
