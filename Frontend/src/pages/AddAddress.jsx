import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddAddress() {
  const navigate = useNavigate();

  // State to store the address input
  const [address, setAddress] = useState({
    country: '',
    city: '',
    address1: '',
    address2: '',
    zipCode: '',
    addressType: '',
  });

  // State for form errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
    // Clear error for the field being edited
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  // Basic form validation
  const validateForm = () => {
    const newErrors = {};
    if (!address.country) newErrors.country = 'Country is required';
    if (!address.city) newErrors.city = 'City is required';
    if (!address.address1) newErrors.address1 = 'Address Line 1 is required';
    if (!address.zipCode) newErrors.zipCode = 'ZIP Code is required';
    if (!address.addressType) newErrors.addressType = 'Address Type is required';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/v2/user/address', address, {
        withCredentials: true, // Send cookies for authentication
      });
      console.log('Address saved:', response.data);
      navigate('/profile');
    } catch (error) {
      console.error('Error saving address:', error.response?.data?.message || error.message);
      setErrors({ submit: error.response?.data?.message || 'Failed to save address' });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Add Address</h2>
        <form onSubmit={handleSubmit}>
          {/* Country */}
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={address.country}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.country ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
          </div>

          {/* City */}
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={address.city}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.city ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
          </div>

          {/* Address Line 1 */}
          <div className="mb-4">
            <label htmlFor="address1" className="block text-sm font-medium text-gray-700">
              Address Line 1
            </label>
            <input
              type="text"
              id="address1"
              name="address1"
              value={address.address1}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.address1 ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.address1 && <p className="text-red-500 text-sm mt-1">{errors.address1}</p>}
          </div>

          {/* Address Line 2 */}
          <div className="mb-4">
            <label htmlFor="address2" className="block text-sm font-medium text-gray-700">
              Address Line 2 (Optional)
            </label>
            <input
              type="text"
              id="address2"
              name="address2"
              value={address.address2}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ZIP Code */}
          <div className="mb-4">
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
              ZIP Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={address.zipCode}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.zipCode ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
          </div>

          {/* Address Type */}
          <div className="mb-4">
            <label htmlFor="addressType" className="block text-sm font-medium text-gray-700">
              Address Type
            </label>
            <select
              id="addressType"
              name="addressType"
              value={address.addressType}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.addressType ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            >
              <option value="">Select Address Type</option>
              <option value="Home">Home</option>
              <option value="Work">Work</option>
              <option value="Other">Other</option>
            </select>
            {errors.addressType && <p className="text-red-500 text-sm mt-1">{errors.addressType}</p>}
          </div>

          {/* Submit Button and Error Message */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add Address
          </button>
          {errors.submit && <p className="text-red-500 text-sm mt-2 text-center">{errors.submit}</p>}
        </form>
      </div>
    </div>
  );
}

export default AddAddress;