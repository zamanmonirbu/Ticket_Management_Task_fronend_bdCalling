import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bookSeat, clearCart } from "../../redux/Actions/busSeatActions";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ViewCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const { cart } = useSelector((state) => state.busCart);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const total = cart.reduce((acc, seat) => acc + seat.money, 0);
    setTotalPrice(total);
  }, [cart]);

  const handlePayLater = () => {
    if (!user) {
      setShowModal(true);
      return;
    }

    if (!cart.length) {
      alert("Your cart is empty. Please add seats before booking.");
      return;
    }

    const bookingData = {
      userId: user.id,
      userMobile: user.mobile,
      seats: cart.map((seat) => ({
        seatNumber: seat.seatNumber,
        price: seat.money,
        busId: seat.busId,
      })),
      totalPrice: totalPrice, // Added total price to booking data
      paymentStatus: "pending",
    };

    dispatch(bookSeat(bookingData));
    dispatch(clearCart());
    alert("Seats booked successfully! Payment can be done later.");
    if (user.role === "user") {
      navigate("/");
    }
    if (user.role === "admin") {
      navigate("/admin/dashboard");
    }
  };

  const handlePayNow = () => {
    if (!user) {
      setShowModal(true);
      return;
    }

    if (!cart.length) {
      alert(
        "Your cart is empty. Please add seats before proceeding to payment."
      );
      return;
    }

    const bookingData = {
      userId: user.id,
      userMobile: user.mobile,
      seats: cart.map((seat) => ({
        seatNumber: seat.seatNumber,
        price: seat.money,
        busId: seat.busId,
      })),
      totalPrice: totalPrice, // Added total price to booking data
      paymentStatus: "Paid",
    };

    dispatch(bookSeat(bookingData));
    dispatch(clearCart());
    alert("Seats booked successfully! Payment can be done later.");
    if (user.role === "user") {
      navigate("/");
    }
    if (user.role === "admin") {
      navigate("/admin/dashboard");
    }
  };

  const handleLogin = () => {
    navigate("/login"); // You can change the route to your login page
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen gradient-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <motion.h3
          className="font-semibold text-2xl mb-6 text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          View Cart
        </motion.h3>

        <motion.div
          className="bg-blue-100 p-4 rounded-lg mb-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="font-semibold text-lg mb-2">User Information</h4>
          {user ? (
            <div>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Mobile Number:</strong> {user.mobile}
              </p>
            </div>
          ) : (
            <p>You are not logged in!!</p>
          )}
        </motion.div>

        <motion.div
          className="bg-gray-100 p-4 rounded-lg"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="font-semibold text-lg mb-4">Booked Seats</h4>
          {cart.length > 0 ? (
            <motion.table
              className="w-full table-auto border-collapse"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">Seat Number</th>
                  <th className="border p-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((seat, index) => (
                  <motion.tr
                    key={index}
                    className="text-center"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="border p-2">{seat.seatNumber}</td>
                    <td className="border p-2">${seat.money}</td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          ) : (
            <p className="text-center py-4">No seats in your cart.</p>
          )}
        </motion.div>

        <motion.div
          className="bg-green-100 p-4 rounded-lg mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="font-semibold text-lg mb-2">Total Payment</h4>
          <p className="text-2xl font-bold">${totalPrice}</p>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.button
            onClick={handlePayNow}
            className="gradient-bg text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Pay Now
          </motion.button>

          <motion.button
            onClick={handlePayLater}
            className="gradient-bg text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Pay Later
          </motion.button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg w-96"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Authentication Required
              </h2>
              <div className="flex justify-between">
                <motion.button
                  onClick={handleLogin}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Login
                </motion.button>
                <motion.button
                  onClick={handleCancel}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ViewCart;
