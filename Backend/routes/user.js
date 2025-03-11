const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

router.get("/profile", auth, async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "User not authenticated" });
    }
    const user = req.user;
    res.status(200).json({
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      addresses: user.addresses || [],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;