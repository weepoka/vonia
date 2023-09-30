import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/Home/Products/ProductDetails/ProductDetails";
import Shop from "../Pages/Shop/Shop";
import Contact from "../Pages/Contact/Contact";
import MyAccount from "../Pages/MyAccount/MyAccount";
import Checkout from "../Pages/Checkout/Checkout";
import ErorrElement from "../Pages/ErorrElement/ErorrElement";
import Cart from "../Pages/Cart/Cart";
import Wishlist from "../Pages/Wishlist/Wishlist";
// import LandscapeView from "../Pages/Shop/LandscapeView/LandscapeView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErorrElement />,
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/landscapeview",
      //   element: <LandscapeView></LandscapeView>,
      // },
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
