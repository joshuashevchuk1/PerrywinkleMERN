const mongoose = require('mongoose')
var _db;

function getDb(){
    return _db;
}


function connect() {
    return new Promise((resolve, reject) => {
        let mongoUri = `mongodb://localhost:27017`
        mongoose.connect(mongoUri).then((res, err) => {
            /* istanbul ignore if */
            if (err) {
                console.log(`Mongodb failed to connect to ${mongoUri}`)
                reject(err)
            }
            console.log(`Mongodb successfully connected to ${mongoUri}`)
            resolve()
        })
    });
}

module.exports = { connect, getfb: getDb }