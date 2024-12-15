import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = ({ role }) => {
  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white flex flex-col">
      <div className="flex justify-center items-center h-16 bg-gray-900 text-xl font-bold">
        <span>Dashboard</span>
      </div>

      <div className="flex-1">
        <ul className="space-y-4 p-4">
          {/* Conditional links based on user role */}
          {role === 'admin' ? (
            <>
              <li>
                <Link to="/admin/manage-users" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  Manage Users
                </Link>
              </li>
              <li>
                <NavLink to="/admin/view-all-buses" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  All Buses
                </NavLink>
              </li>
              {/* Bus Management */}
              <li>
                <Link to="/admin/add-bus" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  Add Bus
                </Link>
              </li>
             
              
              <li>
                <Link to="/admin/add-ticket" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  Add Ticket
                </Link>
              </li>
              <li>
                <Link to="/admin/manage-ticket" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  Manage all Ticket
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/user/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  User Dashboard
                </Link>
              </li>
              <li>
                <Link to="/user/booking-ticket" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  Bookings 
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

// Prop validation
Sidebar.propTypes = {
  role: PropTypes.string.isRequired,  // Validate busId as a required string
};

export default Sidebar;
