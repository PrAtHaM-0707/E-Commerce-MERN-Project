const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { placeOrder } = require("../controllers/order");

router.post("/place", auth, placeOrder);

module.exports = router;