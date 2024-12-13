

import Navbar from "../Dashboard/Navbar";
import Sidebar from "../Dashboard/Sidebar";

const AdminDashboard = ({children}) => {
  return (
    <div className="flex">
      <Sidebar role="admin" />
      <div className="flex-1">
        <Navbar />
        <div className="p-8">          
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
