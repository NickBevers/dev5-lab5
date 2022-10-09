var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("../routes/index");
var usersRouter = require("../routes/users");

var app = express();

app.use((req, res, next) => {
    const origin = req.get("referer");
    const isWhitelisted = whitelist.find((w) => origin && origin.includes(w));
    if (isWhitelisted) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader(
            "Access-Control-Allow-Methods",
            "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        );
        res.setHeader(
            "Access-Control-Allow-Headers",
            "X-Requested-With,Content-Type,Authorization"
        );
        res.setHeader("Access-Control-Allow-Credentials", true);
    }
    // Pass to next layer of middleware
    if (req.method === "OPTIONS") res.sendStatus(200);
    else next();
});

const setContext = (req, res, next) => {
    if (!req.context) req.context = {};
    next();
};
app.use(setContext);

app.use("/api/v1/messages", indexRouter);
app.use("/", (req, res) => {
    res.send("This is an index page");
});
app.use("/users", usersRouter);

module.exports = app;
