const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { placeOrder, getUserOrders } = require("../controllers/order");

router.post("/place", auth, placeOrder);
router.post("/orders", auth, getUserOrders); 

module.exports = router;