import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CartPage from "./pages/CartPage/CartPage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavigationBar />,
      children: [
        {
          index: true,
          element: <HomePage />
        },

        {
          path: "products",
          element: <ProductsPage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "orders",
          element: <OrdersPage />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <div className="App"></div>
    </RouterProvider>
  );
}

export default App;
