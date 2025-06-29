import {createBrowserRouter} from "react-router";
import Home from "../../pages/Home";
import Main from "../Layout/Main";
import Product from "../../pages/Product";

const router = createBrowserRouter([
     {
    path: "/",
    Component: Main,
    children: [
      { index: true, Component: Home },
      { path: "/product" , Component: Product },
      
    ],
  },

]);
export default router;