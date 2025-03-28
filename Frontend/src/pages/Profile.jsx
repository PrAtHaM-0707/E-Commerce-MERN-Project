// frontend/src/pages/Profile.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Add useNavigate
import axios from "../../axiosConfig"; // Use custom axios
import { useSelector } from "react-redux";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const email = useSelector((state) => state.user.email);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v2/user/profile"); // Port 8000
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setLoading(false);
        navigate("/login"); // Redirect to login on auth failure
      }
    };
    fetchUserProfile();
  }, [navigate]);

  if (loading) return <p className="text-center text-gray-500">Loading profile...</p>;
  if (!user) return <p className="text-center text-red-500">Failed to load profile. Please log in.</p>;

  return (
    <div className="container mx-auto p-4">
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
            <p className="text-gray-600">Redux Email: {email || "Not logged in"}</p>
            <p className="text-gray-600">API Email: {user.email}</p>
          </div>
        </div>
      </div>
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
        <Link to="/add-address">
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Add Address
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;