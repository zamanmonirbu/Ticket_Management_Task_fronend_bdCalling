import { useDispatch } from 'react-redux';
import { logout } from '../../redux/Actions/AuthActions';


const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action to clear the state and localStorage
  };

  return (
    <div className="w-full bg-gray-800 text-white h-16 flex items-center px-6">
      <div className="flex-1">
        <h1 className="text-2xl">Welcome to the Dashboard</h1>
      </div>
      <div>
        <button
          onClick={handleLogout}
          className="text-white bg-red-500 py-2 px-4 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
