const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient('mongodb://localhost:27017', { monitorCommands: true });

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err) {
                console.log("Successfully connected to MongoDB.");
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
};