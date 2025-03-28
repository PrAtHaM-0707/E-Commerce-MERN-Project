const { Router } = require("express");
const router = Router();
const auth = require("../middleware/auth");
const { getUserProfile, addAddress, getAddresses } = require("../controller/user");
const User = require("../models/User"); // Import User model
const jwt = require("jsonwebtoken"); // Import jsonwebtoken

router.get("/profile", auth, getUserProfile);
router.post("/address", auth, addAddress);
router.get("/addresses", auth, getAddresses);

// Add login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password"); // Include password field
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || "your-secret-key", // Use .env for secret in production
      { expiresIn: "1h" }
    );

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000, // 1 hour
      // secure: true, // Uncomment in production with HTTPS
    });

    res.status(200).json({ message: "Login successful", user: { id: user._id, email: user.email } });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;