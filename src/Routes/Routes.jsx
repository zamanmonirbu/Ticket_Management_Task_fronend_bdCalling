import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import GuestView from "../components/GuestView/GuestView";
import ViewBuses from '../components/User/ViewBuses'; 
import PrivateRoute from "../components/Dashboard/PrivateRoute";
import Login from "../components/pages/Login";
import AdminDashboard from "../components/Dashboard/AdminDashboard";
import Dashboard from "../components/Dashboard/Dashboard";
import UserPRofile from "../components/Dashboard/UserPRofile";
import ManageUser from "../components/Dashboard/ManageUser";
import AdminPrivate from "../components/Dashboard/AdminPrivate";
import About from "../components/utils/About";
import Contact from "../components/utils/Contact";
import AddBus from "../components/Dashboard/Admin/AddBus";
import ViewCart from "../components/pages/ViewCart";


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
        path: 'user',
        element: <PrivateRoute><Dashboard /></PrivateRoute>, // Protected route
        children: [
          {
            path: 'view-buses', // Sub route for user
            element: <PrivateRoute><ViewBuses /></PrivateRoute>, // Protected subroute
          },
          {
            path: 'profile', // Another sub route for user
            element: <PrivateRoute><UserPRofile /></PrivateRoute>, // User profile page
          },
          {
            path: 'cart', // Another sub route for user
            element: <PrivateRoute><ViewCart/></PrivateRoute>, // User profile page
          },
        ],
      },
      {
        path: 'admin',
        element: <AdminPrivate><AdminDashboard /></AdminPrivate>, // Protected route
        children: [
          {
            path: 'manage-users', // Sub route for admin
            element: <AdminPrivate><ManageUser /></AdminPrivate>, // Admin subroute
          },
          {
            path: 'view-reports', // Another sub route for admin
            element: <AdminPrivate><ManageUser /></AdminPrivate>, // Admin reports page
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
