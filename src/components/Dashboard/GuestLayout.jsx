import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div>
      <h1>Guest Layout</h1>
      <Outlet /> {/* This renders the nested route components */}
    </div>
  );
};

export default GuestLayout;
