// frontend/src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, Home, CreateProduct, MyProducts, AddAddress } from "./Routes";
import ProductInfo from "./pages/ProductInfo";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import SelectAddress from "./pages/SelectAddress";
import OrderConfirmation from "./pages/OrderConfirmation";
import MyOrders from "./pages/MyOrders";
import Navbar from "./components/auth/Navbar";
import "./App.css";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types"; // Add PropTypes import

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const email = useSelector((state) => state.user.email);
  return email ? children : <Navigate to="/login" />;
};

// Add PropTypes validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/create-product"
          element={<ProtectedRoute><CreateProduct /></ProtectedRoute>}
        />
        <Route
          path="/myproducts"
          element={<ProtectedRoute><MyProducts /></ProtectedRoute>}
        />
        <Route
          path="/product/:id"
          element={<ProtectedRoute><ProductInfo /></ProtectedRoute>}
        />
        <Route
          path="/cart"
          element={<ProtectedRoute><Cart /></ProtectedRoute>}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute><Profile /></ProtectedRoute>}
        />
        <Route
          path="/add-address"
          element={<ProtectedRoute><AddAddress /></ProtectedRoute>}
        />
        <Route
          path="/select-address"
          element={<ProtectedRoute><SelectAddress /></ProtectedRoute>}
        />
        <Route
          path="/order-confirmation"
          element={<ProtectedRoute><OrderConfirmation /></ProtectedRoute>}
        />
        <Route
          path="/my-orders"
          element={<ProtectedRoute><MyOrders /></ProtectedRoute>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;