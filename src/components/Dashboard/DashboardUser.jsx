import { useDispatch, useSelector } from "react-redux";
import { getTicketById } from "../../redux/Actions/ticketActions";
import { useEffect } from "react";


const DashboardUser = () => {
    const { user } = useSelector((state) => state.auth);
    const { ticket } = useSelector((state) => state.ticket);
    const dispatch = useDispatch();

    useEffect(() => {
      if (user?.id) {
        dispatch(getTicketById(user?.id));
      }
    }, [dispatch, user?.id]);

    return (
      <div className="bg-gray-100 min-h-screen p-6">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">User Dashboard</h1>
          {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Logout</button> */}
        </header>

        <main className="container mx-auto py-6">
          {/* User Info Section */}
          <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Welcome, {user?.name}</h2>
            <p className="text-gray-700">Here you can view your tickets, notifications, and perform quick actions.</p>
          </section>

          {/* Stats Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
              <div>
                <h2 className="text-gray-600 text-lg font-semibold">Active Tickets</h2>
                <p className="text-2xl font-bold">{ticket?.length || 0}</p>
              </div>
              <div className="bg-blue-500 text-white p-4 rounded-full">
                <i className="fas fa-ticket-alt"></i>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
              <div>
                <h2 className="text-gray-600 text-lg font-semibold">Total Spent</h2>
                <p className="text-2xl font-bold">$350</p>
              </div>
              <div className="bg-green-500 text-white p-4 rounded-full">
                <i className="fas fa-wallet"></i>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
              <div>
                <h2 className="text-gray-600 text-lg font-semibold">Notifications</h2>
                <p className="text-2xl font-bold">5</p>
              </div>
              <div className="bg-yellow-500 text-white p-4 rounded-full">
                <i className="fas fa-bell"></i>
              </div>
            </div>
          </section>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Bus Details</h3>
            <p className="text-gray-700 mb-2"><span className="font-bold">Bus Name:</span> {ticket?.busId?.name}</p>
            <p className="text-gray-700 mb-2"><span className="font-bold">Total Seats:</span> {ticket?.busId?.totalSeats}</p>
            <h4 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Schedules</h4>
            <ul className="space-y-4">
              {ticket?.busId?.schedules?.map((schedule) => (
                <li key={schedule?._id} className="bg-gray-100 p-4 rounded-md">
                  <p className="text-gray-800"><span className="font-bold">From:</span> {schedule?.from} <span className="font-bold">To:</span> {schedule?.to}</p>
                  <p className="text-gray-800"><span className="font-bold">Departure:</span> {schedule?.departureTime} <span className="font-bold">Arrival:</span> {schedule?.arrivalTime}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center font-semibold">View Available Buses</button>
            <button className="bg-green-500 text-white p-6 rounded-lg shadow-lg text-center font-semibold">My Tickets</button>
            <button className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg text-center font-semibold">Update Profile</button>
          </section>
        </main>
      </div>
    );
};

export default DashboardUser;
