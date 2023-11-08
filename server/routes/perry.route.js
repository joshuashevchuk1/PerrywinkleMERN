const express = require("express");
const perryRoute = express.Router();

const perryModel = require('../models/perry.model')

perryRoute.route('/perry').get((req, res) => {
    let perryName = req.query.perryName;
    let filter = {};

    if (perryName) {
        filter['perryName'] = perryName;
    }

    console.log('FILTER: ', JSON.stringify(filter, null, 2));

    // Use Mongoose to find data based on the filter
    perryModel.find(filter, (err, results) => {
        if (err) {
            console.error('Error while querying data:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log('Query results:', results);
            res.status(200).json(results);
        }
    });
});

module.exports = perryRoute;