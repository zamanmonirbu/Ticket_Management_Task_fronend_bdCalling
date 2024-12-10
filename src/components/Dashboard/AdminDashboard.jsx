import Sidebar from './Sidebar';
import Navbar from './Navbar';

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar role="admin" />
      <div className="flex-1">
        <Navbar />
        <div className="p-8">
          <h2 className="text-3xl">Admin Dashboard</h2>
          <p>Welcome, Admin! Here you can manage users and perform admin tasks.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
