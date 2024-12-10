import { useState } from 'react';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

const BusSeatBooking = ({busDetails}) => {
  // Sample data of seats, 1 means booked, 0 means available
  const initialSeats = [
    [0, 0, 0, 0],  // A1, A2, A3, A4
    [0, 1, 0, 0],  // B1, B2 (Booked), B3, B4
    [0, 0, 0, 0],  // C1, C2, C3, C4
    [0, 0, 0, 0],  // D1, D2, D3, D4
    [0, 0, 0, 0],  // E1, E2, E3, E4
    [1, 0, 0, 0],  // F1 (Booked), F2, F3, F4
  ];

  const [seats, setSeats] = useState(initialSeats);

  const handleSeatClick = (rowIndex, colIndex) => {
    // If the seat is already booked (1), do nothing
    if (seats[rowIndex][colIndex] === 1) return;

    // Toggle between available (0) and booked (1)
    const updatedSeats = [...seats];
    updatedSeats[rowIndex][colIndex] = updatedSeats[rowIndex][colIndex] === 0 ? 1 : 0;
    setSeats(updatedSeats);
  };

  // Generate seat labels (e.g., A1, A2, A3, A4)
  const getSeatLabel = (rowIndex, colIndex) => {
    const rowLabel = String.fromCharCode(65 + rowIndex); // 'A', 'B', 'C', etc.
    const colLabel = colIndex + 1; // Column numbers 1, 2, 3, 4
    return `${rowLabel}${colLabel}`;
  };

  return (
    <div className="flex justify-center items-center min-h-screen gradient-bg">
      <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg">
        {/* <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Bus Seat Booking</h1> */}
        <h3 className="font-semibold text-xl mb-4">Book a Seat on {busDetails?.busName}</h3>

        {/* Displaying seats in a grid */}
        <div className="space-y-6">
          {seats.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-4 gap-4">
              {/* For each row, display 4 seats */}
              {row.map((seat, colIndex) => (
                <div key={`${rowIndex}-${colIndex}`} className="flex flex-col items-center">
                  {/* Seat button with icon */}
                  <motion.button
                    onClick={() => handleSeatClick(rowIndex, colIndex)}
                    className={`w-12 h-12 rounded-lg flex items-center justify-center focus:outline-none transition-all ${
                      seat === 1
                        ? 'bg-red-500 cursor-not-allowed'
                        : 'bg-green-500 hover:bg-green-600'
                    }`}
                    disabled={seat === 1}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* If the seat is booked, show the cross icon */}
                    {seat === 1 ? (
                      <IoCheckmarkDoneCircleOutline className="text-white" />
                    ) : (
                      <MdOutlineAirlineSeatReclineExtra className="text-white" />
                    )}
                  </motion.button>
                  {/* Seat Label */}
                  <span className="text-sm mt-1 text-gray-700">
                    {getSeatLabel(rowIndex, colIndex)} {/* Adjust for the correct index */}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusSeatBooking;
