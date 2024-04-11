import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/register", element: <Register /> },
]);