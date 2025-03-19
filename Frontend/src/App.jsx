import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, Home, CreateProduct, MyProducts, AddAddress } from "./Routes";
import ProductInfo from "./pages/ProductInfo";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import SelectAddress from "./pages/SelectAddress";
import OrderConfirmation from "./pages/OrderConfirmation";
import Navbar from "./components/auth/Navbar";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/myproducts" element={<MyProducts />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-address" element={<AddAddress />} />
        <Route path="/select-address" element={<SelectAddress />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;