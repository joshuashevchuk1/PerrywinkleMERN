const express = require("express");
const health = express.Router();

// This will help us connect to the database
const dbo = require("../db/db");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


health.route("/").get(function (req,res){
    res.send("OK");
});

module.exports = health;