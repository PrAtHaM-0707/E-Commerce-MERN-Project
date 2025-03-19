const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { placeOrder, getUserOrders, cancelOrder } = require("../controller/order");

router.post("/place", auth, placeOrder);
router.post("/orders", auth, getUserOrders);
router.put("/cancel/:orderId", auth, cancelOrder); // Add this line

module.exports = router;