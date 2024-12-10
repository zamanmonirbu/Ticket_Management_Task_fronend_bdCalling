
const Navbar = () => {
  return (
    <div className="sticky top-0 w-full bg-blue-600 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">Bus Booking</div>
        <div className="space-x-6">
          <a href="#home" className="text-white hover:text-gray-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
