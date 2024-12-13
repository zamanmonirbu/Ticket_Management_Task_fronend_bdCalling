import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bookSeat } from '../../redux/Actions/busSeatActions';

const ViewCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access cart and user information from Redux state
  const { cart } = useSelector((state) => state.busCart);
  const { user } = useSelector((state) => state.auth); // Assuming user info is stored in the auth state

  // ** Booking seats without payment (Pay Later) **
  const handlePayLater = () => {
    if (!cart.length) {
      alert('Your cart is empty. Please add seats before booking.');
      return;
    }
    
    const bookingData = {
      userId: user._id, // User ID (if available)
      userName: user.name,
      userMobile: user.mobile,
      seats: cart.map((seat) => ({
        seatNumber: seat.seatNumber,
        price: seat.money,
        busId: seat.busId,
      })),
      paymentStatus: 'pending', // Payment status set to pending for "Pay Later"
    };

    // Dispatch the booking action
    dispatch(bookSeat(bookingData));
    alert('Seats booked successfully! Payment can be done later.');
    
    // Optionally, clear the cart or navigate to another page
    navigate('/'); // Navigate to the homepage or another page
  };

  // ** Payment Now Function (Integrate Payment Gateway) **
  const handlePayNow = () => {
    if (!cart.length) {
      alert('Your cart is empty. Please add seats before proceeding to payment.');
      return;
    }

    // Here, you would normally redirect to the payment page or handle payment
    alert('Redirecting to payment page...');
    navigate('/payment'); // Assume you have a /payment route for payment processing
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg">
        <h3 className="font-semibold text-2xl mb-6 text-center">View Cart</h3>

        {/* User Information Section */}
        <div className="bg-blue-100 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-lg mb-2">User Information</h4>
          {user ? (
            <div>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Mobile Number:</strong> {user.mobile}</p>
            </div>
          ) : (
            <p>Loading user information...</p>
          )}
        </div>

        {/* Cart Items Section */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-semibold text-lg mb-4">Booked Seats</h4>
          {cart.length > 0 ? (
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">Seat Number</th>
                  <th className="border p-2">Price</th>
                  <th className="border p-2">Bus ID</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((seat, index) => (
                  <tr key={index} className="text-center">
                    <td className="border p-2">{seat.seatNumber}</td>
                    <td className="border p-2">${seat.money}</td>
                    <td className="border p-2">{seat.busId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center py-4">No seats in your cart.</p>
          )}
        </div>

        {/* Booking Buttons Section */}
        <div className="mt-8 flex justify-center gap-4">
          <button 
            onClick={handlePayNow} 
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all"
          >
            Pay Now
          </button>

          <button 
            onClick={handlePayLater} 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            Pay Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
