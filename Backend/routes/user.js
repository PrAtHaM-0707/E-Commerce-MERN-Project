const { Router } = require("express");
const router = Router();
const auth = require("../middleware/auth"); // Change to default import
const { getUserProfile, addAddress, getAddresses } = require("../controller/user");

router.get("/profile", auth, getUserProfile);
router.post("/address", auth, addAddress);
router.get("/addresses", auth, getAddresses);

module.exports = router;