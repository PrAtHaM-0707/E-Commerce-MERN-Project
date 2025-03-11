const express = require("express");
const router = express.Router();
const User = require("../model/User");
const auth = require("../middleware/auth");

// POST /api/cart/add - Add product to cart
router.post("/add", auth, async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    // Validate input
    if (!productId || !quantity || quantity < 1) {
      return res.status(400).json({ message: "Product ID and valid quantity are required" });
    }

    // Find the authenticated user
    const user = await User.findById(req.user.id); // req.user.id from auth middleware
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if product already in cart
    const cartItemIndex = user.cart.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (cartItemIndex > -1) {
      // Update quantity if product exists
      user.cart[cartItemIndex].quantity += quantity;
    } else {
      // Add new product to cart
      user.cart.push({ productId, quantity });
    }

    // Save updated user
    await user.save();

    res.status(200).json({ message: "Product added to cart", cart: user.cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;