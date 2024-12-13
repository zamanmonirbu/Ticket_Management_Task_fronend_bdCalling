import { Outlet } from "react-router-dom";
const App = () => {
  return <Outlet />;
};

export default App;

// import { Route, Navigate, Routes } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import Login from './components/pages/Login';
// import Register from './components/pages/Register';
// import AdminDashboard from './components/Dashboard/AdminDashboard';
// import UserDashboard from './components/Dashboard/UserDashboard';
// import GuestView from './components/GuestView/GuestView';
// import AddBus from './components/Dashboard/Admin/AddBus';
// import DeleteBus from './components/Dashboard/Admin/DeleteBus';
// import UpdateBus from './components/Dashboard/Admin/UpdateBus';
// import AddTicket from './components/Dashboard/Admin/AddTicket';
// import UpdateTicket from './components/Dashboard/Admin/UpdateTicket';
// import DeleteTicket from './components/Dashboard/Admin/DeleteTicket';

// const App = () => {
//   const { user } = useSelector((state) => state.auth);

//   console.log(user)

//   return (
//     <Routes>
//       {/* Public routes */}
//       <Route
//         path="/"
//         element={user ? <Navigate to={user.role === 'admin' ? '/admin-dashboard' : '/user-dashboard'} /> : <GuestView />}
//       />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />

//       {/* Protected routes */}
//       <Route
//         path="/user-dashboard"
//         element={user ? (user.role === 'user' ? <UserDashboard /> : <Navigate to="/admin-dashboard" />) : <Navigate to="/login" />}
//       />
//       <Route
//         path="/admin-dashboard"
//         element={user ? (user.role === 'admin' ? <AdminDashboard /> : <Navigate to="/user-dashboard" />) : <Navigate to="/login" />}
//       />
//  <Route path="/admin/add-bus" element={<AddBus />} />
//         <Route path="/admin/update-bus" element={<UpdateBus />} />
//         <Route path="/admin/delete-bus" element={<DeleteBus />} />
//         <Route path="/admin/add-ticket" element={<AddTicket />} />
//         <Route path="/admin/update-ticket" element={<UpdateTicket />} />
//         <Route path="/admin/delete-ticket" element={<DeleteTicket />} />

//       {/* If no route matches */}
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// };

// export default App;
