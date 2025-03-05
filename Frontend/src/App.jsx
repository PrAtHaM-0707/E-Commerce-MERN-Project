import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, Home, CreateProduct, MyProducts } from "./Routes";
import Navbar from "./components/Navbar";  // Import Navbar
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> {/* Add Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/myproducts" element={<MyProducts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
