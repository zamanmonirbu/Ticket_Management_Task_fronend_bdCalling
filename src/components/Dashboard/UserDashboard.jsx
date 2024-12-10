import Sidebar from './Sidebar';
import Navbar from './Navbar';

const UserDashboard = () => {
  return (
    <div className="flex">
      <Sidebar role="user" />
      <div className="flex-1">
        <Navbar />
        <div className="p-8">
          <h2 className="text-3xl">User Dashboard</h2>
          <p>Welcome to your user dashboard! Here you can manage your settings, view your information, and more.</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
