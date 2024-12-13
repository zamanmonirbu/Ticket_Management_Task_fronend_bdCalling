import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookedSeats, removeSeatFromCart, addSeatToCart } from '../../redux/Actions/busSeatActions';

const BusSeatBooking = ({ busDetails }) => {
  const dispatch = useDispatch();

  // Access Redux state
  const { bookedSeats, loading } = useSelector((state) => state.busSeats);
  const { cart } = useSelector((state) => state.busCart);

  // Fetch booked seats when component mounts
  useEffect(() => {
    dispatch(fetchBookedSeats(busDetails._id));
  }, [dispatch, busDetails._id]);

  // Generate seats grid dynamically
  const totalSeats = busDetails.totalSeats;
  const seatsPerRow = 4; // Adjust as needed
  const numRows = Math.ceil(totalSeats / seatsPerRow);
  const seats = Array.from({ length: numRows }, (_, rowIndex) =>
    Array.from({ length: seatsPerRow }, (_, colIndex) => {
      const seatNumber = rowIndex * seatsPerRow + colIndex + 1;
      return seatNumber <= totalSeats ? seatNumber : null;
    })
  );

  // Handle seat click
  const handleSeatClick = (seatNumber) => {
    if (!seatNumber || bookedSeats.includes(seatNumber)) return;

    const seatData = {
      seatNumber,
      money: 500, // Example price, you can adjust it dynamically
      busId: busDetails._id,
    };

    if (cart.some(seat => seat.seatNumber === seatNumber)) {
      dispatch(removeSeatFromCart(seatNumber)); // Remove from cart if already in
    } else {
      dispatch(addSeatToCart(seatData)); // Add seat object to cart
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg">
        <h3 className="font-semibold text-xl mb-4">Book a Seat on {busDetails?.name}</h3>

        {loading && <p>Loading seats...</p>}

        <div className="space-y-6">
          {seats.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-4 gap-4">
              {row.map((seatNumber, colIndex) => (
                <div key={`${rowIndex}-${colIndex}`} className="flex flex-col items-center">
                  {seatNumber && (
                    <motion.button
                      onClick={() => handleSeatClick(seatNumber)}
                      className={`w-12 h-12 rounded-lg flex items-center justify-center focus:outline-none transition-all ${
                        bookedSeats.includes(seatNumber)
                          ? 'bg-red-500 cursor-not-allowed'
                          : cart.some(seat => seat.seatNumber === seatNumber)
                          ? 'bg-yellow-500 hover:bg-yellow-600'
                          : 'bg-green-500 hover:bg-green-600'
                      }`}
                      disabled={bookedSeats.includes(seatNumber)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {bookedSeats.includes(seatNumber) ? (
                        <IoCheckmarkDoneCircleOutline className="text-white" />
                      ) : (
                        <MdOutlineAirlineSeatReclineExtra className="text-white" />
                      )}
                    </motion.button>
                  )}
                  {seatNumber && (
                    <span className="text-sm mt-1 text-gray-700">{seatNumber}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

BusSeatBooking.propTypes = {
  busDetails: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    totalSeats: PropTypes.number.isRequired,
    schedules: PropTypes.arrayOf(
      PropTypes.shape({
        from: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        departureTime: PropTypes.string.isRequired,
        arrivalTime: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default BusSeatBooking;
