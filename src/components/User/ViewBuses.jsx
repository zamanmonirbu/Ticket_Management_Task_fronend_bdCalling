// src/Components/ViewBuses.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewBuses } from '../../redux/Actions/UserAction';



const ViewBuses = () => {
  const dispatch = useDispatch();
  const { loading, buses, error } = useSelector((state) => state.buses);

  useEffect(() => {
    dispatch(viewBuses());
  }, [dispatch]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">View Buses</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {buses.map((bus) => (
          <li key={bus._id}>{bus.name} - {bus.route}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewBuses;