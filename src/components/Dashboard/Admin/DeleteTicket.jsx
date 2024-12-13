
// src/Components/DeleteTicket.js
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTicket } from '../../../redux/Actions/ticketActions';

const DeleteTicket = ({ ticketId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTicket(ticketId));
  };

  return (
    <div>
      <button onClick={handleDelete} className="gradient-button">Delete Ticket</button>
    </div>
  );
};

DeleteTicket.propTypes = {
  ticketId: PropTypes.string.isRequired,
};

export default DeleteTicket;