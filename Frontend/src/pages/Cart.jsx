// frontend/src/pages/Cart.jsx
import { useState, useEffect } from "react";
import axios from "../../axiosConfig"; // Use custom axios
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const email = useSelector((state) => state.user.email);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/cart");
        setCart(response.data.cart);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart:", error);
        setLoading(false);
        navigate("/login"); // Redirect to login on auth failure
      }
    };
    fetchCart();
  }, [navigate]);

  const handleIncreaseQuantity = async (productId) => {
    try {
      await axios.put(`http://localhost:8000/api/cart/${productId}`, { action: "increase" });
      const response = await axios.get("http://localhost:8000/api/cart");
      setCart(response.data.cart);
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };

  const handleDecreaseQuantity = async (productId) => {
    try {
      await axios.put(`http://localhost:8000/api/cart/${productId}`, { action: "decrease" });
      const response = await axios.get("http://localhost:8000/api/cart");
      setCart(response.data.cart);
    } catch (error) {
      console.error("Error decreasing quantity:", error);
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading cart...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h1>
      <p className="text-gray-600 mb-4">Logged in as: {email || "Not logged in"}</p>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.productId._id}
              className="flex items-center justify-between border p-4 mb-2 rounded-lg bg-white shadow-sm"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{item.productId.name}</h2>
                <p className="text-gray-600">Price: ${item.productId.price}</p>
                <p className="text-gray-600">
                  Quantity:
                  <button
                    className="ml-2 px-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => handleDecreaseQuantity(item.productId._id)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => handleIncreaseQuantity(item.productId._id)}
                  >
                    +
                  </button>
                </p>
              </div>
              <p className="text-gray-800 font-semibold">
                Total: ${(item.productId.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
          <p className="mt-4 font-bold text-gray-800">
            Total Amount: $
            {cart.reduce((sum, item) => sum + item.productId.price * item.quantity, 0).toFixed(2)}
          </p>
          <div className="mt-4">
            <Link to="/select-address">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Place Order
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;