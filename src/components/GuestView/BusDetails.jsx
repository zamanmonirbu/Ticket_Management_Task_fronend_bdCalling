import PropTypes from "prop-types";
import { ticketPrices } from "../Dashboard/Data/cityData";


const BusDetails = ({ selectedBus }) => {
  console.log(selectedBus);

  return (
    <div className="bg-gray-100 p-4 rounded-xl max-w-5xl mx-auto">
      <h3 className="font-semibold text-xl mb-4">Bus Details:</h3>
      
      {/* Bus General Information */}
      <p><strong>Bus Name:</strong> {selectedBus.name}</p>
      <p><strong>Total Seats:</strong> {selectedBus.totalSeats}</p>
      
      {/* Schedules Details */}
      <h4 className="font-semibold text-lg mt-4">Schedules:</h4>
      {selectedBus.schedules && selectedBus.schedules.length > 0 ? (
        selectedBus.schedules.map((schedule) => {
          // Calculate the ticket price using the ticketPrices object
          const price = ticketPrices[schedule.from]?.[schedule.to] ?? 'N/A';
          
          return (
            <div key={schedule._id} className="bg-white p-4 my-2 rounded-lg shadow-md">
              <p><strong>From:</strong> {schedule.from}</p>
              <p><strong>To:</strong> {schedule.to}</p>
              <p><strong>Departure Time:</strong> {schedule.departureTime}</p>
              <p><strong>Arrival Time:</strong> {schedule.arrivalTime}</p>
              <p><strong>Price:</strong> {price !== 'N/A' ? `${price} BDT` : 'Price not available'}</p>
            </div>
          );
        })
      ) : (
        <p>No schedules available for this bus.</p>
      )}
    </div>
  );
};

BusDetails.propTypes = {
  selectedBus: PropTypes.shape({
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

export default BusDetails;
