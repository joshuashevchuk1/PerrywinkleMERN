const express = require("express");
const perryRoute = express.Router();

const PerryModel = require('../models/perry.model')

perryRoute.route('/perry').get((req, res) => {
    let perryName = req.query.perryName;
    let filter = {};

    if (perryName) {
        filter['perryName'] = perryName;
    }

    console.log('FILTER: ', JSON.stringify(filter, null, 2));

    // Use Mongoose to find data based on the filter
    PerryModel.find(filter, (err, results) => {
        if (err) {
            console.error('Error while querying data:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log('Query results:', results);
            res.status(200).json(results);
        }
    });
});

perryRoute.route('/perry').post((req, res) => {
    let data = req.body
    const map = new PerryModel(data)
    map.save((e, r) => {
        /* istanbul ignore next */
        if (e) {
            if (e.code === DUP_ERROR) {
                return res.status(400).json({ error: 400, message: e.message })
            }
            /* istanbul ignore next */
            return res.status(500).json({ error: 500, message: e.message })
        }
        return res.status(200).json(r)
    })
});

module.exports = perryRoute;