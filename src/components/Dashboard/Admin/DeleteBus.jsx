
// src/Components/DeleteBus.js
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBus } from '../../../redux/Actions/busActions';

const DeleteBus = ({ busId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBus(busId));
  };

  return (
    <div>
      <button onClick={handleDelete} className="gradient-button">Delete Bus</button>
    </div>
  );
};

DeleteBus.propTypes = {
  busId: PropTypes.string.isRequired,
};

export default DeleteBus;