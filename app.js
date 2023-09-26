// Basic Lib Import
const express = require("express");
const router = require("./src/routes/api");
const bodyParser = require("body-parser");
require("dotenv").config();

// Basic Lib Implement
const app = new express();
app.use(bodyParser.json());

// Security Middleware Lib Import
const cors = require("cors");
const helmet = require("helmet");
const expressMongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const expressRateLimit = require("express-rate-limit");
const limiter = expressRateLimit({ windowMs: 15 * 60 * 100, max: 3000 });

// Database Lib Import
const mongoose = require("mongoose");

// Security Middleware Lib Implement
app.use(cors());
app.use(helmet());
app.use(expressMongoSanitize());
app.use(hpp());
app.use(limiter);

// Mongo DB Connect
const { MONGODB_URI } = process.env;
const OPTION = { autoIndex: true };
(async () => {
  try {
    await mongoose.connect(MONGODB_URI, OPTION);
    console.log("Mongo DB Connection Succeed");
  } catch (err) {
    console.error(err);
  }
})();

// Routing Implement
app.use("/api/v1", router);
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" });
});

module.exports = app;
