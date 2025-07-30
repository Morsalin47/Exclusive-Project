import {createBrowserRouter} from "react-router";
import Home from "../../pages/Home";
import Main from "../Layout/Main";
import Product from "../../pages/Product";
import ProductDetails from "../../pages/ProductDetails";
import Cart from "../../pages/Cart";
import Signup from "../../pages/Signup";
import Login from "../../pages/Login";
import CategoryProducts from "../ProductPage/CategoryProduct";

const router = createBrowserRouter([
     {
    path: "/",
    Component: Main,
    children: [
      { index: true, Component: Home },
      { path: "/product" , Component: Product },
      { path: "/product/:id" , Component: ProductDetails },
      { path: "/product/:category" , Component: CategoryProducts },
      { path: "/cart" , Component: Cart },
      { path: "/signup" , Component: Signup },
      { path: "/login" , Component: Login },
      
    ],
  },

]);
export default router;