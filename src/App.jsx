import { Outlet } from "react-router-dom";
import Navbar from "./components/GuestView/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
