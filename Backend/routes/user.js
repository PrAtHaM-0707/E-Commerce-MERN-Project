const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { getUserProfile, addAddress } = require("../controllers/user");

router.get("/profile", auth, getUserProfile);
router.post("/address", auth, addAddress);

module.exports = router;