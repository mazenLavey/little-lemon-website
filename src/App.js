import { Route, RouterProvider, Navigate, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import RootLayout from './layouts/RootLayout';
import Home from './pages/home/Home';
import Menu from "./pages/menu/Menu";
import Reservations from "./pages/reservations/Reservations";
import OrderOnline from "./pages/order-online/OrderOnline";
import Login from "./pages/login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/order-online" element={<OrderOnline />} />
      <Route path="/login" element={<Login />} />

      <Route path='*' element={<Navigate to='/' replace />} />
    </Route>
  )
)
function App() {

  return (
      <RouterProvider router={router} />
  );
}

export default App;
