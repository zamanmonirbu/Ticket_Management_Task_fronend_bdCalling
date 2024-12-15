import { FaUser, FaTasks, FaShoppingCart, FaBell } from 'react-icons/fa'; // Importing icons

const Dashboard = () => {
    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold text-center mb-8">User Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                
                {/* Profile Card */}
                <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform">
                    <FaUser className="text-4xl text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Profile</h3>
                    <p className="text-gray-600">View and edit your profile information.</p>
                </div>

                {/* Tasks Card */}
                <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform">
                    <FaTasks className="text-4xl text-blue-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">My Tasks</h3>
                    <p className="text-gray-600">Check your pending and completed tasks.</p>
                </div>

                {/* Orders Card */}
                <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform">
                    <FaShoppingCart className="text-4xl text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Orders</h3>
                    <p className="text-gray-600">View your recent purchase history.</p>
                </div>

                {/* Notifications Card */}
                <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform">
                    <FaBell className="text-4xl text-red-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Notifications</h3>
                    <p className="text-gray-600">Get the latest updates and alerts.</p>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
