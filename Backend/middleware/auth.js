// backend/middleware/auth.js
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncError");

const auth = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please login to access this resource", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key"); // Match login secret
  if (!decoded) {
    return next(new ErrorHandler("Invalid token", 401));
  }

  const user = await User.findById(decoded.id);
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  req.user = user;
  next();
});

module.exports = auth;