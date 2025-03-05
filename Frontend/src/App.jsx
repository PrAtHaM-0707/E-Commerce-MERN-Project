import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, Home, CreateProduct, MyProducts } from "./Routes";
import ProductInfo from "./pages/ProductInfo"; 
import Navbar from "./components/Navbar";  
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
        <Route path="/product/:id" element={<ProductInfo />} />  {/* Add this route */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
