const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
//const product = require("./controller/cartController"); // Changed to cartController
const path = require("path");
const cartRoutes = require("./routes/cart");

app.use("/api/cart", cartRoutes);
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Configuration for environment variables
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "backend/config/.env",
    });
}

// Import Routes
const user = require("./controller/user");
app.use("/api/v2/user", user);
//app.use("/api/v2/product", product); // This will now use cartController
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/products", express.static(path.join(__dirname, "products")));
app.use(ErrorHandler);

module.exports = app;