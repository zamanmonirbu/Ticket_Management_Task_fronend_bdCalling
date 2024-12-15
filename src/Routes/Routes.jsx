import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import GuestView from "../components/GuestView/GuestView";
import ViewBuses from '../components/User/ViewBuses'; 
import PrivateRoute from "../components/Dashboard/PrivateRoute";
import Login from "../components/pages/Login";
import AdminDashboard from "../components/Dashboard/AdminDashboard";
// import Dashboard from "../components/Dashboard/Dashboard";
import UserPRofile from "../components/Dashboard/UserPRofile";
// import ManageUser from "../components/Dashboard/ManageUser";
import AdminPrivate from "../components/Dashboard/AdminPrivate";
import About from "../components/utils/About";
import Contact from "../components/utils/Contact";
import AddBus from "../components/Dashboard/Admin/AddBus";
import ViewCart from "../components/pages/ViewCart";
import AllBuses from "../components/Dashboard/Admin/AllBuses";
import EditBus from "../components/Dashboard/Admin/EditBus";
import Register from "../components/pages/Register";
import ManageUserViaAdmin from "../components/Dashboard/Admin/ManageUserViaAdmin";
import ManageTickets from "../components/Dashboard/Admin/ManageTickets";
import UserTickets from "../components/Dashboard/User/UserTickets";
import DashboardAdmin from "../components/Dashboard/Admin/DashobordAdmin";
import DashboardUser from "../components/Dashboard/DashboardUser";


const router = createBrowserRouter([
  {
    path: '/', // Main route
    element: <App />, // Parent layout (App.js)
    children: [
      {
        index: true, // Default route for "/"
        element: <GuestView />,
      },
      {
        path: 'about', // Route for "/about"
        element: <About/>,
      },
      {
        path: 'cart', // Route for "/about"
        element: <ViewCart/>,
      },
      {
        path: 'contact', // Route for "/contact"
        element: <Contact />,
      },
      {
        path: 'login', // Route for Login page
        element: <Login />,
      },
      {
        path: 'register', // Route for Login page
        element: <Register/>,
      },
      {
        path: 'user',
        element: <PrivateRoute><AdminDashboard/></PrivateRoute>, // Protected route
        children: [
          {
            path: 'dashboard', // Sub route for user
            element: <PrivateRoute> <DashboardUser/>   </PrivateRoute>, // Protected subroute
          },
          {
            path: 'view-buses', // Sub route for user
            element: <PrivateRoute><ViewBuses /></PrivateRoute>, // Protected subroute
          },
          {
            path: 'booking-ticket', // Sub route for user
            element: <PrivateRoute><UserTickets/></PrivateRoute>, // Protected subroute
          },
          {
            path: 'profile', // Another sub route for user
            element: <PrivateRoute><UserPRofile /></PrivateRoute>, // User profile page
          },
          // {
          //   path: 'cart', // Another sub route for user
          //   element: <PrivateRoute><ViewCart/></PrivateRoute>, // User profile page
          // },
        ],
      },
      {
        path: 'admin',
        element: <AdminPrivate><AdminDashboard /></AdminPrivate>, // Protected route
        children: [
          {
            path: 'dashboard', // Sub route for admin
            // element: <AdminPrivate><ManageUser /></AdminPrivate>, // Admin subroute
            element: <AdminPrivate><DashboardAdmin/></AdminPrivate>, // Admin subroute
          },
          {
            path: 'manage-users', // Another sub route for admin
            element: <AdminPrivate><ManageUserViaAdmin/></AdminPrivate>, // Admin reports page
          },
          {
            path: 'manage-ticket', // Another sub route for admin
            element: <AdminPrivate><ManageTickets/></AdminPrivate>, // Admin reports page
          },
          {
            path: 'edit-bus/:busId', // Another sub route for admin
            element: <AdminPrivate><EditBus/></AdminPrivate>, // Admin reports page
          },
          {
            path: 'add-ticket', // Another sub route for admin
            element: <AdminPrivate><GuestView/></AdminPrivate>, // Admin reports page
          },
          {
            path: 'view-all-buses', // Sub route for user
            element: <AdminPrivate><AllBuses/></AdminPrivate>, // Protected subroute
          },
          {
            path: 'add-bus', // Another sub route for admin
            element: <AdminPrivate><AddBus/></AdminPrivate>, // Admin reports page
          },
        ],
      },
    ],
  },
]);

export default router;
