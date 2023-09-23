import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/Home/Products/ProductDetails/ProductDetails";
import Shop from "../Pages/Shop/Shop";
import Contact from "../Pages/Contact/Contact";
import MyAccount from "../Pages/MyAccount/MyAccount";
import Checkout from "../Pages/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/myaccount",
        element: <MyAccount />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;
