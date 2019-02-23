// APP MIDDLEWARES
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const clientRoutes = require("./routes/client");
// const sequelize = require('./api/config/database');

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

// middleware for defined routes
app.use("/client", clientRoutes);
// app.use("/admin", adminRoutes);

// middleware for requests that does not matched with the defined routes
app.use((req, res, next) => {
    const error = new Error("Resource not found");
    error.status = 404;
    next(error);
});

// middleware for all errors in the app
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

// creates tables in database for defined models
// sequelize
//     .sync({ force: true })
//     .then(result => { console.log('RASPUNS:>>>>>>>>', result) })
//     .catch(err => { console.log('ERROR:>>>>>>>>', err) });

module.exports = app;