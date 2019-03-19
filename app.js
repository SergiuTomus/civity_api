// APP MIDDLEWARES
const express = require("express");
const app = express();
const morgan = require("morgan");
require('dotenv').config();
const bodyParser = require("body-parser");
const passport = require('passport');
const clientRoutes = require("./routes/client");
const adminRoutes = require("./routes/admin");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Access Control middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);

// Middleware for defined routes
app.use("/client", clientRoutes);
app.use("/admin", adminRoutes);

// Middleware for requests that does not matched with the defined routes
app.use((req, res, next) => {
  const error = new Error("Resursa nu a fost gasita");
  error.status = 404;
  next(error);
});

// Middleware for all errors in the app
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});


module.exports = app;