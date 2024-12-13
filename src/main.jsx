import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./store.js";
import { RouterProvider } from "react-router-dom"; // Correct import
import router from "./Routes/Routes.jsx";
// import router from "./Routes/Routes.js"; // Correct router import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} /> {/* Ensure router is here */}
      <ToastContainer />
    </Provider>
  </StrictMode>
);
