const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const auth = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies; // Assuming token is stored in cookies (common in your setup)

  if (!token) {
    return next(new ErrorHandler("Please login to access this resource", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (!decoded) {
    return next(new ErrorHandler("Invalid token", 401));
  }

  const user = await User.findById(decoded.id);
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  req.user = user; // Attach user to request
  next(); // Proceed to the next middleware/route handler
});

module.exports = auth; // Export the function directly