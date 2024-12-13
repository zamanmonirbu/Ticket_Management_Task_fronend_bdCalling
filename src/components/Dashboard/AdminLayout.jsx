import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <h1>Admin Layout</h1>
      <Outlet /> {/* This renders the nested route components */}
    </div>
  );
};

export default AdminLayout;
