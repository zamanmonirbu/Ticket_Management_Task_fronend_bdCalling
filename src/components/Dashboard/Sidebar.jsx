import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Sidebar = ({ role }) => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white flex flex-col">
      <div className="flex justify-center items-center h-16 bg-gray-900 text-xl font-bold">
        <span>Dashboard</span>
      </div>

      <div className="flex-1">
        <ul className="space-y-4 p-4">
          {/* Conditional links based on user role */}
          {role === 'admin' ? (
            <>
              <li>
                <Link to="/admin-dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link to="/admin/users" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  Manage Users
                </Link>
              </li>
              <li>
                <Link to="/admin/buses" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  Manage Buses
                </Link>
              </li>
              {/* Bus Management */}
              <li>
                <Link to="/admin/add-bus" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  Add Bus
                </Link>
              </li>
              <li>
                <Link to="/admin/update-bus" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  Update Bus
                </Link>
              </li>
              <li>
                <Link to="/admin/delete-bus" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  Delete Bus
                </Link>
              </li>
              {/* Ticket Management */}
              <li>
                <Link to="/admin/tickets" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  Manage Tickets
                </Link>
              </li>
              <li>
                <Link to="/admin/add-ticket" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  Add Ticket
                </Link>
              </li>
              <li>
                <Link to="/admin/update-ticket" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  Update Ticket
                </Link>
              </li>
              <li>
                <Link to="/admin/delete-ticket" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  Delete Ticket
                </Link>
              </li>
              <li>
                <Link to="/admin/settings" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  Admin Settings
                </Link>
              </li>
              <li>
                <Link to="/logout" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/user-dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  User Dashboard
                </Link>
              </li>
              <li>
                <Link to="/user/settings" className="block py-2 px-4 hover:bg-gray-700 rounded">
                  User Settings
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
