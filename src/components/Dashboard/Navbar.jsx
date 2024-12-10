import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full bg-gray-800 text-white h-16 flex items-center px-6">
      <div className="flex-1">
        <h1 className="text-2xl">Welcome to the Dashboard</h1>
      </div>
      <div>
        <Link
          to="/login"
          className="text-white bg-red-500 py-2 px-4 rounded hover:bg-red-600"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
