import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBuses, deleteBus } from '../../../redux/Actions/busActions'; 
import { useNavigate } from 'react-router-dom'; 

const AllBuses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allBuses, loading } = useSelector(state => state.bus); 

  const [selectedBusId, setSelectedBusId] = useState(null); // Store the selected bus to delete

  useEffect(() => {
    dispatch(getAllBuses()); 
  }, [dispatch]);

  const handleEdit = (busId) => {
    navigate(`/admin/edit-bus/${busId}`);
  };

  const handleDeleteClick = (busId) => {
    setSelectedBusId(busId); // Open the modal and store the selected bus ID
  };

  const confirmDelete = () => {
    dispatch(deleteBus(selectedBusId)); 
    setSelectedBusId(null); // Close the modal after deleting
  };

  const cancelDelete = () => {
    setSelectedBusId(null); // Close the modal
  };

  if (loading) {
    return <div className="text-center text-gray-500 font-semibold mt-10">Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">All Buses</h2>

      {allBuses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allBuses.map(bus => (
            <div key={bus._id} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{bus.name}</h3>
              <p className="text-gray-700 mb-4"><strong>Total Seats:</strong> {bus.totalSeats}</p>

              <h4 className="text-lg font-semibold text-gray-700 mb-2">Schedules</h4>
              {bus.schedules.map(schedule => (
                <div key={schedule._id} className="bg-gray-100 p-3 rounded-md mb-3">
                  <p className="text-gray-700"><strong>From:</strong> {schedule.from} <strong>To:</strong> {schedule.to}</p>
                  <p className="text-gray-700"><strong>Departure:</strong> {schedule.departureTime} <strong>Arrival:</strong> {schedule.arrivalTime}</p>
                </div>
              ))}

              {/* Edit and Delete buttons */}
              <div className="flex justify-between mt-4">
                <button 
                  onClick={() => handleEdit(bus._id)} 
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDeleteClick(bus._id)} 
                  className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 font-semibold mt-10">No buses available.</div>
      )}

      {/* Delete Confirmation Modal */}
      {selectedBusId && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md w-96">
            <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">
              Are you sure you want to delete this bus?
            </h2>
            <div className="flex justify-between mt-6">
              <button 
                onClick={cancelDelete} 
                className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-6 rounded"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDelete} 
                className="bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBuses;
