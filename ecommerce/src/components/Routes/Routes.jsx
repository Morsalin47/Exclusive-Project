import {createBrowserRouter} from "react-router";
import Home from "../../pages/Home";
import Main from "../Layout/Main";
import Product from "../../pages/Product";
import ProductDetails from "../../pages/ProductDetails";
import Cart from "../../pages/Cart";

const router = createBrowserRouter([
     {
    path: "/",
    Component: Main,
    children: [
      { index: true, Component: Home },
      { path: "/product" , Component: Product },
      { path: "/product/:id" , Component: ProductDetails },
      { path: "/cart" , Component: Cart },
      
    ],
  },

]);
export default router;