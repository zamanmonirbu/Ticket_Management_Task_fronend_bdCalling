import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
  const {user}=useSelector((state)=>state.auth);
  return (
    <div className="flex">
      <Sidebar role={user.role} />
      <div className="flex-1">
        <Navbar />
        <Outlet/>
      </div>
    </div>
  );
};

export default AdminDashboard;
