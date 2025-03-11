const express = require("express");
const router = express.Router();

// Placeholder route
router.get("/", (req, res) => {
    res.status(200).json({ message: "Product route placeholder" });
});

module.exports = router;