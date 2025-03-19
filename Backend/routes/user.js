const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { getUserProfile, addAddress, getAddresses } = require("../controllers/user"); // Add getAddresses

router.get("/profile", auth, getUserProfile);
router.post("/address", auth, addAddress);
router.get("/addresses", auth, getAddresses); 

module.exports = router;