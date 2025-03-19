const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const User = require("../model/User");

exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorHandler("User not authenticated", 401));
  }
  const user = req.user;
  res.status(200).json({
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    addresses: user.addresses || [],
  });
});

exports.addAddress = catchAsyncErrors(async (req, res, next) => {
  const { addressType, address1, address2, city, country, zipCode } = req.body;

  if (!addressType || !address1 || !city || !country || !zipCode) {
    return next(new ErrorHandler("All fields except Address Line 2 are required", 400));
  }

  const allowedTypes = ["Home", "Work", "Other"];
  if (!allowedTypes.includes(addressType)) {
    return next(new ErrorHandler("Address Type must be Home, Work, or Other", 400));
  }

  if (isNaN(Number(zipCode))) {
    return next(new ErrorHandler("ZIP Code must be a valid number", 400));
  }

  const newAddress = {
    addressType,
    address1,
    address2,
    city,
    country,
    zipCode: Number(zipCode),
  };

  const user = await User.findById(req.user.id);

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  console.log(`Adding address for user ${req.user.id}:`, newAddress);
  user.addresses.push(newAddress);
  await user.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    message: "Address added successfully",
    user: {
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      addresses: user.addresses,
    },
  });
});

exports.getAddresses = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  res.status(200).json({
    success: true,
    addresses: user.addresses || [],
  });
});

module.exports = { getUserProfile, addAddress, getAddresses }; 