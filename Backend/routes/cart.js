const express = require("express");
const router = express.Router();
const User = require("../model/User");
const auth = require("../middleware/auth");

// POST /api/cart/add - Add product to cart (from Milestone 17)
router.post("/add", auth, async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    if (!productId || !quantity || quantity < 1) {
      return res.status(400).json({ message: "Product ID and valid quantity are required" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const cartItemIndex = user.cart.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (cartItemIndex > -1) {
      user.cart[cartItemIndex].quantity += quantity;
    } else {
      user.cart.push({ productId, quantity });
    }

    await user.save();

    res.status(200).json({ message: "Product added to cart", cart: user.cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/cart - Fetch all products in the user's cart
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("cart.productId");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ cart: user.cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// PUT /api/cart/:productId - Update quantity of a product in the cart
router.put("/:productId", auth, async (req, res) => {
  const { productId } = req.params;
  const { action } = req.body; // 'increase' or 'decrease'

  try {
    if (!productId || !action || !["increase", "decrease"].includes(action)) {
      return res.status(400).json({ message: "Invalid product ID or action" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const cartItemIndex = user.cart.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (cartItemIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    if (action === "increase") {
      user.cart[cartItemIndex].quantity += 1;
    } else if (action === "decrease") {
      if (user.cart[cartItemIndex].quantity > 1) {
        user.cart[cartItemIndex].quantity -= 1;
      } else {
        user.cart.splice(cartItemIndex, 1); // Remove item if quantity becomes 0
      }
    }

    await user.save();

    res.status(200).json({ message: "Quantity updated", cart: user.cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;