import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { SplashScreen } from "./pages/SplashScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
    errorElement: <div>Essa página não existe</div>,
  },
  { path: "/home", element: <Home /> },
  { path: "/orders", element: <div>Orders</div> },
  { path: "/products", element: <div>Products</div> },
]);
