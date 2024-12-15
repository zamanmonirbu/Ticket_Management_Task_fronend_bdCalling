import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import { register } from "../../../redux/Actions/AuthActions";

const RegisterViaAdmin = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState(""); // New state for mobile number
  const [role, setRole] = useState("user"); // New state for user role

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !address || !mobile || !role) {
      toast.error("Please fill in all fields");
      return;
    }

    console.log(name, email, password, address, mobile, role);

    dispatch(register(name, email, password, address, mobile, role)); // Include role in registration
  };

  useEffect(() => {
    if (error) {
      console.log(error);
      toast.error(error);
    }
  }, [error]); // Run only when `error` changes

  return (
    <div className="flex justify-center items-center min-h-screen gradient-bg">
      <motion.div
        className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-semibold text-center text-blue-600">
          Register
        </h1>
        <form onSubmit={handleRegister} className="mt-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-teal-400 to-blue-600 text-white font-semibold rounded-md hover:from-blue-600 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login here
            </a>
          </p>
        </div>
        <ToastContainer />
      </motion.div>
    </div>
  );
};

export default RegisterViaAdmin;
