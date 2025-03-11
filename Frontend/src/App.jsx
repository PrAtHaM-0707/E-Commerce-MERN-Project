import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, Home, CreateProduct, MyProducts } from "./Routes";
import ProductInfo from "./pages/ProductInfo"; 
import Cart from "./pages/Cart"; // Import the new Cart page
import Navbar from "./components/auth/Navbar"; // Adjusted path based on your structure
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
        <Route path="/cart" element={<Cart />} /> {/* Add Cart route */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;