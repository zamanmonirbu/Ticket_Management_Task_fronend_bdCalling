import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types'; 
import { viewAvailableTickets } from '../../redux/Actions/UserAction';

const ViewAvailableTickets = ({ busId }) => {
  const dispatch = useDispatch();
  const { loading, tickets, error } = useSelector((state) => state.tickets);

  useEffect(() => {
    if (busId) {
      dispatch(viewAvailableTickets(busId));
    }
  }, [dispatch, busId]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">View Available Tickets</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket._id}>{ticket.timeSlot} - ${ticket.price}</li>
        ))}
      </ul>
    </div>
  );
};


ViewAvailableTickets.propTypes = {
  busId: PropTypes.string.isRequired, // busId should be a required string
};

export default ViewAvailableTickets;
