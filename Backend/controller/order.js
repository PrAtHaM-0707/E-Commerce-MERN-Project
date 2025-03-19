const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const Order = require("../model/Order");
const User = require("../model/User");

exports.placeOrder = catchAsyncErrors(async (req, res, next) => {
  const { email, products, address } = req.body;

  if (!email || !products || !products.length || !address) {
    return next(new ErrorHandler("Missing required fields: email, products, or address", 400));
  }

  const user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  const orders = products.map((product) => ({
    user: user._id,
    products: [
      {
        productId: product.productId,
        quantity: product.quantity,
      },
    ],
    address: {
      addressType: address.addressType,
      address1: address.address1,
      address2: address.address2 || "",
      city: address.city,
      country: address.country,
      zipCode: address.zipCode,
    },
    totalAmount: product.price * product.quantity,
    status: "Pending",
  }));

  const createdOrders = await Order.insertMany(orders);

  res.status(201).json({
    success: true,
    message: "Orders placed successfully",
    orders: createdOrders,
  });
});

exports.getUserOrders = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(new ErrorHandler("Email is required", 400));
  }

  const user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  const orders = await Order.find({ user: user._id }).populate("products.productId", "name price");

  res.status(200).json({
    success: true,
    orders,
  });
});

module.exports = { placeOrder, getUserOrders };