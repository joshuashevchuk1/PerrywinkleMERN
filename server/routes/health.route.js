const express = require("express");
const healthRoute = express.Router();

healthRoute.route("/health").get(function (req, res){
    res.send("OK");
});

module.exports = healthRoute;