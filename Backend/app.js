const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const cartRoutes = require("./routes/cart");
const userRoutes = require("./routes/user");
const orderRoutes = require("./routes/order");

app.use("/api/cart", cartRoutes);
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true, 
}));
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

app.use("/api/v2/user", userRoutes);
app.use("/api/v2/order", orderRoutes); 
//app.use("/api/v2/product", product);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/products", express.static(path.join(__dirname, "products")));
app.use(ErrorHandler);

module.exports = app;