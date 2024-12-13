import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { cart } = useSelector((state) => state.busCart);

  return (
    <div className="sticky top-0 w-full bg-blue-600 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">Bus Booking</div>
        <div className="space-x-6">
          <NavLink to="" className="text-white hover:text-gray-300">Home</NavLink>
          <NavLink to="about" className="text-white hover:text-gray-300">About</NavLink>
          <NavLink to="contact" className="text-white hover:text-gray-300">Contact</NavLink>
          <NavLink to="cart" className="text-white hover:text-gray-300">
            Cart <span className="bg-red-500 text-white rounded-full px-2 py-1 text-sm">
              {cart.length}
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
