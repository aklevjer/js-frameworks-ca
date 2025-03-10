import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import CheckoutSuccess from "../pages/CheckoutSuccess";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/checkout/success", element: <CheckoutSuccess /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
