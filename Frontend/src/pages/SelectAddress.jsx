import React, { useState, useEffect } from "react";
import axios from "axios";

const SelectAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v2/user/addresses", {
          withCredentials: true,
        });
        setAddresses(response.data.addresses);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching addresses:", error);
        setLoading(false);
      }
    };
    fetchAddresses();
  }, []);

  const handleSelect = (addressId) => {
    setSelectedAddress(addressId);
  };

  const handleConfirm = () => {
    console.log("Selected Address Index:", selectedAddress);
    // Placeholder for order placement logic in future milestones
  };

  if (loading) return <p className="text-center text-gray-500">Loading addresses...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Select Delivery Address</h1>
      {addresses.length === 0 ? (
        <p className="text-gray-500">No addresses found. Please add one.</p>
      ) : (
        <div>
          {addresses.map((address, index) => (
            <div
              key={index}
              className="flex items-center border p-4 mb-2 rounded-lg bg-white shadow-sm"
            >
              <input
                type="radio"
                name="address"
                value={index}
                checked={selectedAddress === index}
                onChange={() => handleSelect(index)}
                className="mr-2"
              />
              <label>
                {address.address1}, {address.address2 && `${address.address2}, `}
                {address.city}, {address.country} - {address.zipCode} ({address.addressType})
              </label>
            </div>
          ))}
          <button
            onClick={handleConfirm}
            disabled={selectedAddress === null}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 disabled:bg-gray-400"
          >
            Confirm Address
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectAddress;