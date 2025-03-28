// frontend/src/pages/MyOrders.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux"; // Add useSelector

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const email = useSelector((state) => state.user.email); // Access email from Redux

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/v2/order/orders",
          { email: email || "user@example.com" }, // Use Redux email
          { withCredentials: true }
        );
        setOrders(response.data.orders);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch orders");
        setLoading(false);
        console.error("Error fetching orders:", err);
      }
    };
    fetchOrders();
  }, [email]); // Add email as dependency

  const handleCancelOrder = async (orderId) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/v2/order/cancel/${orderId}`,
        {},
        { withCredentials: true }
      );
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: "Cancelled" } : order
        )
      );
      console.log("Order cancelled:", response.data);
    } catch (err) {
      console.error("Error cancelling order:", err);
      setError("Failed to cancel order");
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading orders...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">My Orders</h1>
      <p className="text-gray-600 mb-4">Logged in as: {email || "Not logged in"}</p> {/* Display email */}
      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <div>
          {orders.map((order) => (
            <div
              key={order._id}
              className="border p-4 mb-4 rounded-lg bg-white shadow-sm"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                Order ID: {order._id}
              </h2>
              <p className="text-gray-600">Status: {order.status}</p>
              <p className="text-gray-600">
                Placed on: {new Date(order.createdAt).toLocaleDateString()}
              </p>
              <div className="mt-2">
                <h3 className="text-md font-semibold">Products:</h3>
                {order.products.map((item) => (
                  <div
                    key={item.productId._id}
                    className="flex justify-between mt-1"
                  >
                    <div>
                      <p className="text-gray-800">{item.productId.name}</p>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-gray-800">
                      ${(item.productId.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-2">
                <h3 className="text-md font-semibold">Delivery Address:</h3>
                <p className="text-gray-600">
                  {order.address.address1}, {order.address.address2 && `${order.address.address2}, `}
                  {order.address.city}, {order.address.country} - {order.address.zipCode} (
                  {order.address.addressType})
                </p>
              </div>
              <p className="mt-2 text-gray-800 font-bold">
                Total: ${order.totalAmount.toFixed(2)}
              </p>
              {order.status !== "Cancelled" && (
                <button
                  onClick={() => handleCancelOrder(order._id)}
                  className="mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                >
                  Cancel Order
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;