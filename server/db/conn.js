const { MongoClient } = require("mongodb");
const client = new MongoClient('mongodb://localhost:27017', { monitorCommands: true });
var _db;

module.exports = {
    connectToServer: function () {
        client.connect()
            .then(() => {
                console.log('Connected to the MongoDB server');
            })
            .catch(err => {
                console.error('Error connecting to the MongoDB server:', err);
            });
    },

    getDb: function () {
        return _db;
    },
};