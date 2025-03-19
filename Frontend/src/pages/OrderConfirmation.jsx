import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const OrderConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { selectedAddress, cart } = state || {};
  const [paymentMethod, setPaymentMethod] = useState("cod");

  if (!selectedAddress || !cart) {
    return <p className="text-center text-gray-500">No order data available.</p>;
  }

  const totalAmount = cart
    .reduce((sum, item) => sum + item.productId.price * item.quantity, 0)
    .toFixed(2);

  const handlePlaceOrder = async () => {
    try {
      const orderData = {
        email: "user@example.com", // Replace with actual user email
        products: cart.map((item) => ({
          productId: item.productId._id,
          quantity: item.quantity,
          price: item.productId.price,
        })),
        address: selectedAddress,
        paymentMethod: "cod", // Add payment method to order data
      };

      const response = await axios.post(
        "http://localhost:5000/api/v2/order/place",
        orderData,
        { withCredentials: true }
      );
      console.log("COD Order response:", response.data);
      navigate("/order-success");
    } catch (error) {
      console.error("Error placing COD order:", error);
    }
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalAmount,
            currency_code: "USD",
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    try {
      const paymentDetails = await actions.order.capture();
      const orderData = {
        email: "user@example.com", // Replace with actual user email
        products: cart.map((item) => ({
          productId: item.productId._id,
          quantity: item.quantity,
          price: item.productId.price,
        })),
        address: selectedAddress,
        paymentMethod: "paypal",
        paymentDetails: {
          transactionId: paymentDetails.id,
          status: paymentDetails.status,
        },
      };

      const response = await axios.post(
        "http://localhost:5000/api/v2/order/place",
        orderData,
        { withCredentials: true }
      );
      console.log("PayPal Order response:", response.data);
      navigate("/order-success");
    } catch (error) {
      console.error("Error processing PayPal payment:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Order Confirmation</h1>

      {/* Products Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Products</h2>
        {cart.map((item) => (
          <div
            key={item.productId._id}
            className="flex justify-between border p-4 mb-2 rounded-lg bg-white shadow-sm"
          >
            <div>
              <p className="text-gray-800 font-semibold">{item.productId.name}</p>
              <p className="text-gray-600">Price: ${item.productId.price}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <p className="text-gray-800 font-semibold">
              Total: ${(item.productId.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* Address Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
        <div className="border p-4 rounded-lg bg-white shadow-sm">
          <p className="text-gray-800">
            {selectedAddress.address1}, {selectedAddress.address2 && `${selectedAddress.address2}, `}
            {selectedAddress.city}, {selectedAddress.country} - {selectedAddress.zipCode} (
            {selectedAddress.addressType})
          </p>
        </div>
      </div>

      {/* Total Amount */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Total Amount</h2>
        <p className="text-gray-800 font-bold text-lg">${totalAmount}</p>
      </div>

      {/* Payment Options */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
              className="mr-2"
            />
            Cash on Delivery (COD)
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="online"
              checked={paymentMethod === "online"}
              onChange={() => setPaymentMethod("online")}
              className="mr-2"
            />
            Online Payment (PayPal)
          </label>
        </div>

        {/* PayPal Buttons */}
        {paymentMethod === "online" && (
          <div className="mt-4">
            <PayPalScriptProvider
              options={{
                "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
                currency: "USD",
              }}
            >
              <PayPalButtons
                createOrder={createOrder}
                onApprove={onApprove}
                onError={(err) => console.error("PayPal Error:", err)}
              />
            </PayPalScriptProvider>
          </div>
        )}
      </div>

      {/* Place Order Button for COD */}
      {paymentMethod === "cod" && (
        <button
          onClick={handlePlaceOrder}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Place Order
        </button>
      )}
    </div>
  );
};

export default OrderConfirmation;