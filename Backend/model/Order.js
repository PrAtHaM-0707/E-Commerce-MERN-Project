const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  address: {
    addressType: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String },
    city: { type: String, required: true },
    country: { type: String, required: true },
    zipCode: { type: Number, required: true },
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ["cod", "paypal"],
  },
  paymentDetails: {
    transactionId: { type: String },
    status: { type: String },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);