import { Link } from "react-router-dom";
import { getTickets } from "../../../redux/Actions/ticketActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



const DashboardAdmin = () => {

const {tickets=[]}=useSelector((state)=>state.ticket);
const totalTickets = tickets?.length || 0;
  const totalRevenue = tickets?.reduce((acc, ticket) => acc + ticket.total, 0) || 0;
  const totalBuses = new Set(tickets?.map((ticket) => ticket.busId)).size || 0;
  const totalUsers = new Set(tickets?.map((ticket) => ticket.userId)).size || 0;

console.log(tickets)

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getTickets());
  },[dispatch])
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Logout</button> */}
      </header>

      <main className="container mx-auto py-6">
        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h2 className="text-gray-600 text-lg font-semibold">
                Total Users
              </h2>
              <p className="text-2xl font-bold">{totalUsers}</p>
            </div>
            <div className="bg-blue-500 text-white p-4 rounded-full">
              <i className="fas fa-users"></i>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h2 className="text-gray-600 text-lg font-semibold">
                Total Buses
              </h2>
              <p className="text-2xl font-bold">{totalBuses}</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-full">
              <i className="fas fa-bus"></i>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h2 className="text-gray-600 text-lg font-semibold">
                Total Tickets
              </h2>
              <p className="text-2xl font-bold">{totalTickets}</p>
            </div>
            <div className="bg-yellow-500 text-white p-4 rounded-full">
              <i className="fas fa-ticket-alt"></i>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h2 className="text-gray-600 text-lg font-semibold">Revenue</h2>
              <p className="text-2xl font-bold">{totalRevenue}</p>
            </div>
            <div className="bg-red-500 text-white p-4 rounded-full">
              <i className="fas fa-wallet"></i>
            </div>
          </div>
        </section>

        {/* Recent Activities */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <p>
                New user <strong>John Doe</strong> registered
              </p>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </li>
            <li className="flex items-center justify-between">
              <p>
                Ticket #4532 purchased by <strong>Jane Smith</strong>
              </p>
              <span className="text-sm text-gray-500">4 hours ago</span>
            </li>
            <li className="flex items-center justify-between">
              <p>
                New bus <strong>GreenLine</strong> added
              </p>
              <span className="text-sm text-gray-500">1 day ago</span>
            </li>
          </ul>
        </section>

        {/* Quick Actions */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to={'/admin/add-bus'}>
            {" "}
            <button className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center font-semibold">
              Add New Bus
            </button>
          </Link>
          <Link to={'/admin/manage-ticket'}>
            <button className="bg-green-500 text-white p-6 rounded-lg shadow-lg text-center font-semibold">
              View All Tickets
            </button>
          </Link>
          <Link to={'/admin/manage-users'}>
            <button className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg text-center font-semibold">
              Manage Users
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default DashboardAdmin;
