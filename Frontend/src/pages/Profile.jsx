import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v2/user/profile", {
          withCredentials: true,
        });
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading profile...</p>;

  if (!user) return <p className="text-center text-red-500">Failed to load profile. Please log in.</p>;

  return (
    <div className="container mx-auto p-4">
      {/* Profile Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">My Profile</h1>
        <div className="flex items-center space-x-4">
          <img
            src={user.avatar.url || "/uploads/default_avatar.jpg"}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Addresses Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">My Addresses</h2>
        {user.addresses.length === 0 ? (
          <p className="text-gray-500">No address found.</p>
        ) : (
          <div className="space-y-4">
            {user.addresses.map((address, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <p className="text-gray-800"><strong>Type:</strong> {address.addressType}</p>
                <p className="text-gray-800"><strong>Address:</strong> {address.address1}</p>
                {address.address2 && <p className="text-gray-800"><strong>Address 2:</strong> {address.address2}</p>}
                <p className="text-gray-800"><strong>City:</strong> {address.city}</p>
                <p className="text-gray-800"><strong>Country:</strong> {address.country}</p>
                <p className="text-gray-800"><strong>Zip Code:</strong> {address.zipCode}</p>
              </div>
            ))}
          </div>
        )}
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add Address
        </button>
      </div>
    </div>
  );
};

export default Profile;