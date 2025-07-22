import {createBrowserRouter} from "react-router";
import Home from "../../pages/Home";
import Main from "../Layout/Main";
import Product from "../../pages/Product";
import ProductDetails from "../../pages/ProductDetails";
import Cart from "../../pages/Cart";
import Signup from "../../pages/Signup";

const router = createBrowserRouter([
     {
    path: "/",
    Component: Main,
    children: [
      { index: true, Component: Home },
      { path: "/product" , Component: Product },
      { path: "/product/:id" , Component: ProductDetails },
      { path: "/cart" , Component: Cart },
      { path: "/signup" , Component: Signup },
      
    ],
  },

]);
export default router;